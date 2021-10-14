import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'vimaepre'}}
})
export class Vimaepre extends Entity {
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
    postgresql: {columnName: 'codlinea', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codlinea: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 3,
    postgresql: {columnName: 'codprod', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codprod: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codprove', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codprove: number;

  @property({
    type: 'number',
    required: true,
    precision: 14,
    scale: 2,
    postgresql: {columnName: 'valprod', dataType: 'numeric', dataLength: null, dataPrecision: 14, dataScale: 2, nullable: 'NO'},
  })
  valprod: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 4,
    postgresql: {columnName: 'ciclo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  ciclo: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 5,
    postgresql: {columnName: 'periodo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  periodo: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'fechinic', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechinic: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'fechfina', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechfina: string;

  @property({
    type: 'string',
    required: true,
    length: 8,
    postgresql: {columnName: 'usuario', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  usuario: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'estado', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  estado: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vimaepre>) {
    super(data);
  }
}

export interface VimaepreRelations {
  // describe navigational properties here
}

export type VimaepreWithRelations = Vimaepre & VimaepreRelations;
