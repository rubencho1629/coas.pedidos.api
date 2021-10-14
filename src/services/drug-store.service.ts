import { BindingScope, inject, injectable } from '@loopback/core';
import { AnyObject } from '@loopback/repository';
import { BdsiflbDataSource } from '../datasources';

@injectable({ scope: BindingScope.TRANSIENT })
export class DrugStoreService {
  constructor(
    @inject('datasources.bdsiflb')
    public dataSource: BdsiflbDataSource
  ) {}

  /*
   * Add service methods here
   */

  async getPanelDrugStore(codzona: string): Promise<AnyObject> {
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
      ['WHERE vimaedxz.estado=0'],
      ['AND codzona=$1'],
      ['order by vimaedrg.coddrog desc'],
    ]
      .flat()
      .join(' ');

    debugger;
    var arr = await this.dataSource.execute(query);

    return arr;
  }
}
