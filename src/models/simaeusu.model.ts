import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'simaeusu'}}
})
export class Simaeusu extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 8,
    id: 1,
    postgresql: {columnName: 'usuario', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  usuario: string;

  @property({
    type: 'string',
    length: 40,
    postgresql: {columnName: 'nombre', dataType: 'character', dataLength: 40, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  @property({
    type: 'number',
    precision: 12,
    scale: 0,
    postgresql: {columnName: 'nit', dataType: 'numeric', dataLength: null, dataPrecision: 12, dataScale: 0, nullable: 'YES'},
  })
  nit?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codcargo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codcargo?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codsecc', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codsecc?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'fecha_i', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fechaI?: string;

  @property({
    type: 'string',
    length: 8,
    postgresql: {columnName: 'hora_i', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  horaI?: string;

  @property({
    type: 'string',
    length: 8,
    postgresql: {columnName: 'autoriza', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  autoriza?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecha?: string;

  @property({
    type: 'string',
    length: 8,
    postgresql: {columnName: 'clave', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  clave?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'f_expira_p', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fExpiraP?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codcia', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codcia?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'estado', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  estado?: number;

  @property({
    type: 'string',
    length: 255,
    postgresql: {columnName: 'claveenc', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  claveenc?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Simaeusu>) {
    super(data);
  }
}

export interface SimaeusuRelations {
  // describe navigational properties here
}

export type SimaeusuWithRelations = Simaeusu & SimaeusuRelations;
