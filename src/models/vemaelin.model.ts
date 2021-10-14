import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'vemaelin'}}
})
export class Vemaelin extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 1,
    postgresql: {columnName: 'aud_esta', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  audEsta: string;

  @property({
    type: 'string',
    required: true,
    length: 8,
    postgresql: {columnName: 'aud_usua', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  audUsua: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'aud_fech', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  audFech: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'emp_codi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  empCodi: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 2,
    postgresql: {columnName: 'codlinea', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codlinea: number;

  @property({
    type: 'string',
    length: 30,
    postgresql: {columnName: 'nomlinea', dataType: 'character', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nomlinea?: string;

  @property({
    type: 'string',
    length: 8,
    postgresql: {columnName: 'usuario', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  usuario?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'numini', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  numini?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'numfin', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  numfin?: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'manexist', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  manexist: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'comproba', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  comproba: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'manalist', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  manalist?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'tipo', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  tipo?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'codcia', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codcia: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'lin_invc', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  linInvc?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codcopse', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codcopse?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'lin_pnue', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  linPnue?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'lin_dise', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  linDise?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'lin_ince', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  linInce?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'lin_rppe', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  linRppe?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'lin_areg', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  linAreg?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vemaelin>) {
    super(data);
  }
}

export interface VemaelinRelations {
  // describe navigational properties here
}

export type VemaelinWithRelations = Vemaelin & VemaelinRelations;
