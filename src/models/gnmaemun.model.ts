import { Entity, model, property } from "@loopback/repository";

@model({
  settings: {
    idInjection: false,
    postgresql: { schema: "public", table: "gnmaemun" },
  },
})
export class Gnmaemun extends Entity {
  @property({
    type: "number",
    required: true,
    scale: 0,
    id: 1,
    postgresql: {
      columnName: "pai_codi",
      dataType: "integer",
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: "NO",
    },
  })
  paiCodi: number;

  @property({
    type: "number",
    required: true,
    scale: 0,
    id: 2,
    postgresql: {
      columnName: "dep_codi",
      dataType: "integer",
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: "NO",
    },
  })
  depCodi: number;

  @property({
    type: "number",
    required: true,
    scale: 0,
    id: 3,
    postgresql: {
      columnName: "mun_codi",
      dataType: "integer",
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: "NO",
    },
  })
  munCodi: number;

  @property({
    type: "string",
    postgresql: {
      columnName: "mun_nomb",
      dataType: "character varying",
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: "YES",
    },
  })
  munNomb?: string;

  @property({
    type: "string",
    postgresql: {
      columnName: "mun_indi",
      dataType: "character varying",
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: "YES",
    },
  })
  munIndi?: string;

  @property({
    type: "string",
    postgresql: {
      columnName: "aud_esta",
      dataType: "character varying",
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: "YES",
    },
  })
  audEsta?: string;

  @property({
    type: "string",
    postgresql: {
      columnName: "aud_usua",
      dataType: "character varying",
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: "YES",
    },
  })
  audUsua?: string;

  @property({
    type: "date",
    postgresql: {
      columnName: "aud_ufac",
      dataType: "date",
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: "YES",
    },
  })
  audUfac?: string;

  @property({
    type: "number",
    scale: 0,
    postgresql: {
      columnName: "reg_codi",
      dataType: "integer",
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: "YES",
    },
  })
  regCodi?: number;

  @property({
    type: "number",
    precision: 6,
    scale: 2,
    postgresql: {
      columnName: "mun_rsar",
      dataType: "numeric",
      dataLength: null,
      dataPrecision: 6,
      dataScale: 2,
      nullable: "YES",
    },
  })
  munRsar?: number;

  @property({
    type: "string",
    length: 5,
    postgresql: {
      columnName: "mun_unid",
      dataType: "character varying",
      dataLength: 5,
      dataPrecision: null,
      dataScale: null,
      nullable: "YES",
    },
  })
  munUnid?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Gnmaemun>) {
    super(data);
  }
}

export interface GnmaemunRelations {
  // describe navigational properties here
}

export type GnmaemunWithRelations = Gnmaemun & GnmaemunRelations;
