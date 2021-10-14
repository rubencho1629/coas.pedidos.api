import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'vimaedxz'}}
})
export class Vimaedxz extends Entity {
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
    id: 3,
    postgresql: {columnName: 'coddrog', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  coddrog: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    id: 4,
    postgresql: {columnName: 'nitdrog', dataType: 'numeric', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'NO'},
  })
  nitdrog: number;

  @property({
    type: 'string',
    required: true,
    length: 4,
    id: 2,
    postgresql: {columnName: 'codzona', dataType: 'character', dataLength: 4, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  codzona: string;

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
    length: 4,
    postgresql: {columnName: 'revisita', dataType: 'character', dataLength: 4, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  revisita: string;

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
    postgresql: {columnName: 'diahabil', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  diahabil: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'diarevis', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  diarevis: number;

  @property({
    type: 'string',
    required: true,
    length: 4,
    postgresql: {columnName: 'tranfer', dataType: 'character', dataLength: 4, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  tranfer: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'mes', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  mes?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'periodo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  periodo?: number;

  @property({
    type: 'string',
    length: 200,
    postgresql: {columnName: 'retiro', dataType: 'character', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  retiro?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vimaedxz>) {
    super(data);
  }
}

export interface VimaedxzRelations {
  // describe navigational properties here
}

export type VimaedxzWithRelations = Vimaedxz & VimaedxzRelations;
