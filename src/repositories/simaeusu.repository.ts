import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdsiflbDataSource} from '../datasources';
import {Simaeusu, SimaeusuRelations} from '../models';

export class SimaeusuRepository extends DefaultCrudRepository<
  Simaeusu,
  typeof Simaeusu.prototype.usuario,
  SimaeusuRelations
> {
  constructor(
    @inject('datasources.bdsiflb') dataSource: BdsiflbDataSource,
  ) {
    super(Simaeusu, dataSource);
  }
}
