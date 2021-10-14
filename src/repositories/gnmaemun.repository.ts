import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdsiflbDataSource} from '../datasources';
import {Gnmaemun, GnmaemunRelations} from '../models';

export class GnmaemunRepository extends DefaultCrudRepository<
  Gnmaemun,
  typeof Gnmaemun.prototype.paiCodi,
  GnmaemunRelations
> {
  constructor(
    @inject('datasources.bdsiflb') dataSource: BdsiflbDataSource,
  ) {
    super(Gnmaemun, dataSource);
  }
}
