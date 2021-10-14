import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'vimaeped'}}
})
export class Vimaeped extends Entity {
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
    postgresql: {columnName: 'codlinea', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codlinea: number;

  @property({
    type: 'number',
    required: true,
    precision: 16,
    scale: 0,
    id: 2,
    postgresql: {columnName: 'numpedi', dataType: 'numeric', dataLength: null, dataPrecision: 16, dataScale: 0, nullable: 'NO'},
  })
  numpedi: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'ciclo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  ciclo: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'periodo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  periodo: number;

  @property({
    type: 'string',
    required: true,
    length: 4,
    postgresql: {columnName: 'codvende', dataType: 'character', dataLength: 4, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  codvende: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codzona', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codzona: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'dep_codi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  depCodi: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'mun_codi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  munCodi: number;

  @property({
    type: 'number',
    required: true,
    precision: 16,
    scale: 0,
    postgresql: {columnName: 'factura', dataType: 'numeric', dataLength: null, dataPrecision: 16, dataScale: 0, nullable: 'NO'},
  })
  factura: number;

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
    scale: 0,
    postgresql: {columnName: 'coddrog', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  coddrog: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'tipoped', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  tipoped: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'fechped', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechped: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'horaped', dataType: 'time with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  horaped?: string;

  @property({
    type: 'number',
    required: true,
    precision: 16,
    scale: 2,
    postgresql: {columnName: 'vlrpedi', dataType: 'numeric', dataLength: null, dataPrecision: 16, dataScale: 2, nullable: 'NO'},
  })
  vlrpedi: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    postgresql: {columnName: 'tipo_tra', dataType: 'character', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  tipoTra: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    postgresql: {columnName: 'tramitar', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  tramitar: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'fechatra', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechatra: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    postgresql: {columnName: 'personal', dataType: 'character', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  personal: string;

  @property({
    type: 'number',
    required: true,
    precision: 16,
    scale: 2,
    postgresql: {columnName: 'recibio', dataType: 'numeric', dataLength: null, dataPrecision: 16, dataScale: 2, nullable: 'NO'},
  })
  recibio: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'cuota', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  cuota: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'cumplimi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  cumplimi: number;

  @property({
    type: 'string',
    required: true,
    length: 15,
    postgresql: {columnName: 'ordencomp', dataType: 'character', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  ordencomp: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    postgresql: {columnName: 'estado', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
    length: 8,
    postgresql: {columnName: 'usuario', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  usuario: string;

  @property({
    type: 'string',
    length: 8,
    postgresql: {columnName: 'nomabrev', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nomabrev?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vimaeped>) {
    super(data);
  }
}

export interface VimaepedRelations {
  // describe navigational properties here
}

export type VimaepedWithRelations = Vimaeped & VimaepedRelations;
