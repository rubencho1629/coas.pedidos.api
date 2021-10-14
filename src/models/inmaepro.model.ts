import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'inmaepro'}}
})
export class Inmaepro extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 8,
    postgresql: {columnName: 'usuario', dataType: 'character', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  usuario: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecha: string;

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
    postgresql: {columnName: 'claseinv', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  claseinv: number;

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
    postgresql: {columnName: 'codgrup', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codgrup: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 2,
    postgresql: {columnName: 'codprod', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codprod: number;

  @property({
    type: 'string',
    required: true,
    length: 150,
    postgresql: {columnName: 'nomprod', dataType: 'character', dataLength: 150, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nomprod: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codpres', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codpres: number;

  @property({
    type: 'string',
    required: true,
    length: 1,
    postgresql: {columnName: 'clase', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  clase: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'estado', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  estado: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codunmed', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codunmed: number;

  @property({
    type: 'string',
    required: true,
    length: 1,
    postgresql: {columnName: 'pidelote', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  pidelote: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'embalaje', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  embalaje: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codcond', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codcond: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codbode', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codbode: number;

  @property({
    type: 'string',
    length: 3,
    postgresql: {columnName: 'codplac', dataType: 'character', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codplac?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codprove', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codprove: number;

  @property({
    type: 'number',
    precision: 6,
    scale: 2,
    postgresql: {columnName: 'codimpue', dataType: 'numeric', dataLength: null, dataPrecision: 6, dataScale: 2, nullable: 'YES'},
  })
  codimpue?: number;

  @property({
    type: 'number',
    precision: 16,
    scale: 2,
    postgresql: {columnName: 'invemini', dataType: 'numeric', dataLength: null, dataPrecision: 16, dataScale: 2, nullable: 'YES'},
  })
  invemini?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codpolit', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codpolit?: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'lotemini', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  lotemini: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'increlot', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  increlot?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'coddeman', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  coddeman?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'leadticp', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  leadticp?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'conimi', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  conimi?: string;

  @property({
    type: 'number',
    precision: 16,
    scale: 2,
    postgresql: {columnName: 'reorden', dataType: 'numeric', dataLength: null, dataPrecision: 16, dataScale: 2, nullable: 'YES'},
  })
  reorden?: number;

  @property({
    type: 'number',
    precision: 16,
    scale: 2,
    postgresql: {columnName: 'compmin', dataType: 'numeric', dataLength: null, dataPrecision: 16, dataScale: 2, nullable: 'YES'},
  })
  compmin?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'dmargen', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  dmargen?: number;

  @property({
    type: 'number',
    precision: 16,
    scale: 2,
    postgresql: {columnName: 'consumop', dataType: 'numeric', dataLength: null, dataPrecision: 16, dataScale: 2, nullable: 'YES'},
  })
  consumop?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'undcompr', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  undcompr?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codalter', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codalter?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'reqcompr', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  reqcompr?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'controla', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  controla?: string;

  @property({
    type: 'string',
    length: 60,
    postgresql: {columnName: 'enticont', dataType: 'character', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  enticont?: string;

  @property({
    type: 'string',
    length: 15,
    postgresql: {columnName: 'docaut', dataType: 'character', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  docaut?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'fvenaut', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fvenaut?: string;

  @property({
    type: 'number',
    precision: 16,
    scale: 2,
    postgresql: {columnName: 'cantaut', dataType: 'numeric', dataLength: null, dataPrecision: 16, dataScale: 2, nullable: 'YES'},
  })
  cantaut?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'unmedaut', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  unmedaut?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'unmedcon', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  unmedcon?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codplan', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codplan?: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codforma', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codforma: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'canunpro', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  canunpro: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'canunbli', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  canunbli: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 2,
    postgresql: {columnName: 'medida', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'NO'},
  })
  medida: number;

  @property({
    type: 'number',
    required: true,
    precision: 14,
    scale: 2,
    postgresql: {columnName: 'diasexi', dataType: 'numeric', dataLength: null, dataPrecision: 14, dataScale: 2, nullable: 'NO'},
  })
  diasexi: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'uniafab', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  uniafab?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codmono', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codmono?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'potencia', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  potencia?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'leadtica', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  leadtica?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pideana', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  pideana?: string;

  @property({
    type: 'string',
    required: true,
    length: 13,
    postgresql: {columnName: 'codbarras', dataType: 'character', dataLength: 13, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  codbarras: string;

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
    precision: 12,
    scale: 0,
    postgresql: {columnName: 'codincen', dataType: 'numeric', dataLength: null, dataPrecision: 12, dataScale: 0, nullable: 'YES'},
  })
  codincen?: number;

  @property({
    type: 'number',
    precision: 12,
    scale: 2,
    postgresql: {columnName: 'canmuesf', dataType: 'numeric', dataLength: null, dataPrecision: 12, dataScale: 2, nullable: 'YES'},
  })
  canmuesf?: number;

  @property({
    type: 'number',
    precision: 8,
    scale: 4,
    postgresql: {columnName: 'canmuesv', dataType: 'numeric', dataLength: null, dataPrecision: 8, dataScale: 4, nullable: 'YES'},
  })
  canmuesv?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'leadtcal', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  leadtcal?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codcamp', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codcamp?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pro_cbcg', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proCbcg?: string;

  @property({
    type: 'string',
    length: 3,
    postgresql: {columnName: 'pro_cate', dataType: 'character', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proCate?: string;

  @property({
    type: 'string',
    length: 5,
    postgresql: {columnName: 'codprvad', dataType: 'character', dataLength: 5, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codprvad?: string;

  @property({
    type: 'string',
    length: 5,
    postgresql: {columnName: 'codprims', dataType: 'character', dataLength: 5, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codprims?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codfabri', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codfabri?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'esimpres', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  esimpres?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pidetraz', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  pidetraz?: string;

  @property({
    type: 'number',
    precision: 12,
    scale: 2,
    postgresql: {columnName: 'pesoprod', dataType: 'numeric', dataLength: null, dataPrecision: 12, dataScale: 2, nullable: 'YES'},
  })
  pesoprod?: number;

  @property({
    type: 'number',
    precision: 12,
    scale: 2,
    postgresql: {columnName: 'pesoemba', dataType: 'numeric', dataLength: null, dataPrecision: 12, dataScale: 2, nullable: 'YES'},
  })
  pesoemba?: number;

  @property({
    type: 'string',
    length: 6,
    postgresql: {columnName: 'codubica', dataType: 'character', dataLength: 6, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codubica?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'gruimpue', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  gruimpue?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pro_rmue', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proRmue?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'inclumes', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  inclumes?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codinst', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codinst?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pidetara', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  pidetara?: string;

  @property({
    type: 'number',
    precision: 18,
    scale: 0,
    postgresql: {columnName: 'nitclien', dataType: 'numeric', dataLength: null, dataPrecision: 18, dataScale: 0, nullable: 'YES'},
  })
  nitclien?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'pro_para', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proPara?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pro_rate', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proRate?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'pro_tple', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proTple?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'cod_coru', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codCoru?: number;

  @property({
    type: 'number',
    precision: 12,
    scale: 3,
    postgresql: {columnName: 'pro_altc', dataType: 'numeric', dataLength: null, dataPrecision: 12, dataScale: 3, nullable: 'YES'},
  })
  proAltc?: number;

  @property({
    type: 'number',
    precision: 12,
    scale: 3,
    postgresql: {columnName: 'pro_ancc', dataType: 'numeric', dataLength: null, dataPrecision: 12, dataScale: 3, nullable: 'YES'},
  })
  proAncc?: number;

  @property({
    type: 'number',
    precision: 12,
    scale: 3,
    postgresql: {columnName: 'pro_lagc', dataType: 'numeric', dataLength: null, dataPrecision: 12, dataScale: 3, nullable: 'YES'},
  })
  proLagc?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codpolic', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codpolic?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'categolt', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  categolt?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'categova', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  categova?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 2,
    postgresql: {columnName: 'factorlt', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'YES'},
  })
  factorlt?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 2,
    postgresql: {columnName: 'factorva', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'YES'},
  })
  factorva?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pro_anal', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proAnal?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pro_prca', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proPrca?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'pro_prco', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proPrco?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'pro_puee', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proPuee?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pro_sesp', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proSesp?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codplan1', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codplan1?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pro_mdge', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proMdge?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pro_came', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proCame?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'pro_tamb', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proTamb?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'saldoc', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  saldoc?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'pro_insu', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proInsu?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'pro_pbod', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  proPbod?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'pro_pbcp', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  proPbcp?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 2,
    postgresql: {columnName: 'leadtipd', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'YES'},
  })
  leadtipd?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Inmaepro>) {
    super(data);
  }
}

export interface InmaeproRelations {
  // describe navigational properties here
}

export type InmaeproWithRelations = Inmaepro & InmaeproRelations;
