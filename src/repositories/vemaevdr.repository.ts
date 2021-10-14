import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdsiflbDataSource} from '../datasources';
import {Vemaevdr, VemaevdrRelations} from '../models';

export class VemaevdrRepository extends DefaultCrudRepository<
  Vemaevdr,
  typeof Vemaevdr.prototype.codcia,
  VemaevdrRelations
> {
  constructor(
    @inject('datasources.bdsiflb') dataSource: BdsiflbDataSource,
  ) {
    super(Vemaevdr, dataSource);
  }
}
