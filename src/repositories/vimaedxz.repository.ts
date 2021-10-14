import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdsiflbDataSource} from '../datasources';
import {Vimaedxz, VimaedxzRelations} from '../models';

export class VimaedxzRepository extends DefaultCrudRepository<
  Vimaedxz,
  typeof Vimaedxz.prototype.codcia,
  VimaedxzRelations
> {
  constructor(
    @inject('datasources.bdsiflb') dataSource: BdsiflbDataSource,
  ) {
    super(Vimaedxz, dataSource);
  }
}
