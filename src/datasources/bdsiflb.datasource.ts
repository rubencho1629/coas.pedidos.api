import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'bdsiflb',
  connector: 'postgresql',
  url: '',
  host: '172.27.100.11',
  port: 5432,
  user: 'postgres',
  password: 'postgrs04',
  database: 'bdsif',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BdsiflbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'bdsiflb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.bdsiflb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
