import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'vimaedrg'}}
})
export class Vimaedrg extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'codcia', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codcia: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 2,
    postgresql: {columnName: 'coddrog', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  coddrog: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    postgresql: {columnName: 'nitdrog', dataType: 'numeric', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'NO'},
  })
  nitdrog: number;

  @property({
    type: 'string',
    required: true,
    length: 60,
    postgresql: {columnName: 'nomdrog', dataType: 'character', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nomdrog: string;

  @property({
    type: 'string',
    required: true,
    length: 60,
    postgresql: {columnName: 'dirdrog', dataType: 'character', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  dirdrog: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'coddpto', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  coddpto: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codmun', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codmun: number;

  @property({
    type: 'string',
    required: true,
    length: 60,
    postgresql: {columnName: 'barrio', dataType: 'character', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  barrio: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'feching', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  feching: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'estado', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  estado: number;

  @property({
    type: 'string',
    required: true,
    length: 60,
    postgresql: {columnName: 'teldrog', dataType: 'character', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  teldrog: string;

  @property({
    type: 'string',
    length: 60,
    postgresql: {columnName: 'email', dataType: 'character', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  email?: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    postgresql: {columnName: 'tipoesta', dataType: 'character', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  tipoesta: string;

  @property({
    type: 'string',
    required: true,
    length: 255,
    postgresql: {columnName: 'provcade', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  provcade: string;

  @property({
    type: 'string',
    required: true,
    length: 10,
    postgresql: {columnName: 'domicili', dataType: 'character', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  domicili: string;

  @property({
    type: 'string',
    required: true,
    length: 3,
    postgresql: {columnName: 'consulto', dataType: 'character', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  consulto: string;

  @property({
    type: 'string',
    required: true,
    length: 30,
    postgresql: {columnName: 'ventas', dataType: 'character', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  ventas: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'depemuje', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  depemuje?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'depehomb', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  depehomb?: number;

  @property({
    type: 'string',
    length: 5,
    postgresql: {columnName: 'codcopse', dataType: 'character', dataLength: 5, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codcopse?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'traconse', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  traconse?: number;

  @property({
    type: 'string',
    length: 3,
    postgresql: {columnName: 'clasific', dataType: 'character', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  clasific?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'fecharet', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecharet?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'contacto', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  contacto?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fechcump', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fechcump?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'pasatiem', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  pasatiem?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vimaedrg>) {
    super(data);
  }
}

export interface VimaedrgRelations {
  // describe navigational properties here
}

export type VimaedrgWithRelations = Vimaedrg & VimaedrgRelations;
