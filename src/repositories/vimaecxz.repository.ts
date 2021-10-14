import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdsiflbDataSource} from '../datasources';
import {Vimaecxz, VimaecxzRelations} from '../models';

export class VimaecxzRepository extends DefaultCrudRepository<
  Vimaecxz,
  typeof Vimaecxz.prototype.codcia,
  VimaecxzRelations
> {
  constructor(
    @inject('datasources.bdsiflb') dataSource: BdsiflbDataSource,
  ) {
    super(Vimaecxz, dataSource);
  }
}
