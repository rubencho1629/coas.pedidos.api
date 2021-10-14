import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdsiflbDataSource} from '../datasources';
import {Vimaeped, VimaepedRelations} from '../models';

export class VimaepedRepository extends DefaultCrudRepository<
  Vimaeped,
  typeof Vimaeped.prototype.codcia,
  VimaepedRelations
> {
  constructor(
    @inject('datasources.bdsiflb') dataSource: BdsiflbDataSource,
  ) {
    super(Vimaeped, dataSource);
  }
}
