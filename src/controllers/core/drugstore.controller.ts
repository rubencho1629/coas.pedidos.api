import { inject } from '@loopback/context';
import { AnyObject } from '@loopback/repository';
import { get, getModelSchemaRef, response } from '@loopback/rest';
import { BdsiflbDataSource } from '../../datasources';
import { UserProfile } from '../../models';
import { DrugStore } from '../../models/core/drug-store.model';

export class DrugStoreController {
  constructor(
    @inject('datasources.bdsiflb')
    public dataSource: BdsiflbDataSource
  ) {}

  @get('/drugstore')
  @response(200, {
    description: 'Array of Vemaevdr model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DrugStore),
        },
      },
    },
  })
  async getPanelDrugStore(): Promise<AnyObject> {
    const query: string = [
      'SELECT',
      [
        'vimaedrg.codcia',
        'vimaedrg.coddrog',
        'vimaedrg.nitdrog',
        'nomdrog',
        'dirdrog',
        'coddpto',
        'dep_nomb',
        'codmun',
        'mun_nomb',
        'barrio',
        'revisita',
        'diahabil',
        'diarevis',
        'tranfer',
      ].join(','),
      'FROM',
      'vimaedxz',
      [
        'JOIN vimaedrg ON vimaedxz.codcia = vimaedrg.codcia AND vimaedxz.coddrog = vimaedrg.coddrog',
      ],
      ['JOIN gnmaedep ON gnmaedep.dep_codi = coddpto'],
      [
        'JOIN gnmaemun ON gnmaedep.dep_codi = gnmaemun.dep_codi AND codmun = gnmaemun.mun_codi',
      ],
      ['WHERE vimaedxz.estado = 0'],
      ['AND codzona = $1'],
      ['order by vimaedrg.coddrog desc'],
    ]
      .flat()
      .join(' ');

    var panelDrugStore: AnyObject = await this.dataSource.execute(query, [
      'A37',
    ]);

    return panelDrugStore;
  }

  @get('/userprofile')
  @response(200, {
    description: 'Panel user info',
    content: {
      'applicattion/json': {
        schema: getModelSchemaRef(UserProfile),
      },
    },
  })
  async getUserProfile(): Promise<AnyObject> {
    const query: string = [
      'SELECT',
      [
        'simaeusu.usuario',
        'ccempl',
        'nomaeemp.codempl',
        'emp_noco',
        'nombre',
        'codvende',
        'nomabrev',
      ].join(','),
      'FROM',
      ['simaeusu', 'nomaeemp', 'vemaevdr'].join(','),
      'WHERE',
      ['simaeusu.nit = nomaeemp.ccempl'],
      ['and estado = 0'],
      ['and vemaevdr.codcia = nomaeemp.codcia'],
      ['and vemaevdr.codempl = nomaeemp.codempl'],
      ['and vemaevdr.codcia = 1'],
      ['and usuario = $1'],
      ['and codvende = $2'],
      ['LIMIT 1'],
    ]
      .flat()
      .join(' ');

    var panelDrugStore: AnyObject = await this.dataSource.execute(query, [
      'sbed1815',
      'A37',
    ]);
    return panelDrugStore[0];
  }
}
