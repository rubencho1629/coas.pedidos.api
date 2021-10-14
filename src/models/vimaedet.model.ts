import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'vimaedet'}}
})
export class Vimaedet extends Entity {
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
    precision: 16,
    scale: 0,
    id: 3,
    postgresql: {columnName: 'numpedi', dataType: 'numeric', dataLength: null, dataPrecision: 16, dataScale: 0, nullable: 'NO'},
  })
  numpedi: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 4,
    postgresql: {columnName: 'consec', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  consec: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codprod', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codprod: number;

  @property({
    type: 'string',
    length: 100,
    postgresql: {columnName: 'descripc', dataType: 'character', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  descripc?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'cantprod', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  cantprod: number;

  @property({
    type: 'number',
    precision: 14,
    scale: 2,
    postgresql: {columnName: 'valprod', dataType: 'numeric', dataLength: null, dataPrecision: 14, dataScale: 2, nullable: 'YES'},
  })
  valprod?: number;

  @property({
    type: 'number',
    required: true,
    precision: 14,
    scale: 2,
    postgresql: {columnName: 'vlritem', dataType: 'numeric', dataLength: null, dataPrecision: 14, dataScale: 2, nullable: 'NO'},
  })
  vlritem: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'inv_actu', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  invActu: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'cantentr', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  cantentr: number;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vimaedet>) {
    super(data);
  }
}

export interface VimaedetRelations {
  // describe navigational properties here
}

export type VimaedetWithRelations = Vimaedet & VimaedetRelations;
