import { juggler } from '@loopback/repository';

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

export const testBdsiflbDataSource: juggler.DataSource = new juggler.DataSource(
  config
);
