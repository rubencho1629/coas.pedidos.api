import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdsiflbDataSource} from '../datasources';
import {Nomaeemp, NomaeempRelations} from '../models';

export class NomaeempRepository extends DefaultCrudRepository<
  Nomaeemp,
  typeof Nomaeemp.prototype.empCodi,
  NomaeempRelations
> {
  constructor(
    @inject('datasources.bdsiflb') dataSource: BdsiflbDataSource,
  ) {
    super(Nomaeemp, dataSource);
  }
}
