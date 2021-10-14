import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'ptmaepre'}}
})
export class Ptmaepre extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'codpres', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codpres: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'nompres', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nompres: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'canunpro', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  canunpro?: number;

  @property({
    type: 'number',
    precision: 6,
    scale: 2,
    postgresql: {columnName: 'medida', dataType: 'numeric', dataLength: null, dataPrecision: 6, dataScale: 2, nullable: 'YES'},
  })
  medida?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'reqmuean', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  reqmuean?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ptmaepre>) {
    super(data);
  }
}

export interface PtmaepreRelations {
  // describe navigational properties here
}

export type PtmaepreWithRelations = Ptmaepre & PtmaepreRelations;
