import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdsiflbDataSource} from '../datasources';
import {Vimaedrg, VimaedrgRelations} from '../models';

export class VimaedrgRepository extends DefaultCrudRepository<
  Vimaedrg,
  typeof Vimaedrg.prototype.codcia,
  VimaedrgRelations
> {
  constructor(
    @inject('datasources.bdsiflb') dataSource: BdsiflbDataSource,
  ) {
    super(Vimaedrg, dataSource);
  }
}
