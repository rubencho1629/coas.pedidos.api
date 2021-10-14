import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'gnmaedep'}}
})
export class Gnmaedep extends Entity {
  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'pai_codi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  paiCodi?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'dep_codi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  depCodi?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'dep_nomb', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  depNomb?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'aud_esta', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  audEsta?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'aud_usua', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  audUsua?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'aud_ufac', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  audUfac?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'reg_codi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  regCodi?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Gnmaedep>) {
    super(data);
  }
}

export interface GnmaedepRelations {
  // describe navigational properties here
}

export type GnmaedepWithRelations = Gnmaedep & GnmaedepRelations;
