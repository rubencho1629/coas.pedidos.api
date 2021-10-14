import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'vemaevdr'}}
})
export class Vemaevdr extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codlinea', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codlinea: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codtivdr', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codtivdr: number;

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
    required: true,
    length: 4,
    id: 2,
    postgresql: {columnName: 'codvende', dataType: 'character', dataLength: 4, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  codvende: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    postgresql: {columnName: 'nomvende', dataType: 'character', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nomvende: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codempl', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codempl: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'medicos', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  medicos?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'drogueria', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  drogueria?: number;

  @property({
    type: 'string',
    length: 8,
    postgresql: {columnName: 'nomabrev', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nomabrev?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codtrans', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codtrans?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'revisita', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  revisita?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'med_rev', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  medRev?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'revidrog', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  revidrog?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'drog_rev', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  drogRev?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'tipovend', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  tipovend?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vemaevdr>) {
    super(data);
  }
}

export interface VemaevdrRelations {
  // describe navigational properties here
}

export type VemaevdrWithRelations = Vemaevdr & VemaevdrRelations;
