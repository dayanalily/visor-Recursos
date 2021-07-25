import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import { Recursos, RecursosRelations} from '../models';

export class RecursosRepository extends DefaultCrudRepository<
  Recursos,
  typeof Recursos.prototype.id,
  RecursosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Recursos, dataSource);
  }
}
