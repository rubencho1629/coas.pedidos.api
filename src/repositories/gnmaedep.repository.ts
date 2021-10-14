import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdsiflbDataSource} from '../datasources';
import {Gnmaedep, GnmaedepRelations} from '../models';

export class GnmaedepRepository extends DefaultCrudRepository<
  Gnmaedep,
  typeof Gnmaedep.prototype.id,
  GnmaedepRelations
> {
  constructor(
    @inject('datasources.bdsiflb') dataSource: BdsiflbDataSource,
  ) {
    super(Gnmaedep, dataSource);
  }
}
