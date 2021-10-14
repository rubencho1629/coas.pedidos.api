import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'nomaeemp'}}
})
export class Nomaeemp extends Entity {
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
    id: 1,
    postgresql: {columnName: 'emp_codi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  empCodi: number;

  @property({
    type: 'number',
    required: true,
    precision: 14,
    scale: 0,
    id: 2,
    postgresql: {columnName: 'cod_empl', dataType: 'numeric', dataLength: null, dataPrecision: 14, dataScale: 0, nullable: 'NO'},
  })
  codEmpl: number;

  @property({
    type: 'string',
    required: true,
    length: 10,
    id: 3,
    postgresql: {columnName: 'cod_inte', dataType: 'character', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  codInte: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    postgresql: {columnName: 'tip_docu', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  tipDocu: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'emp_nom1', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  empNom1: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'emp_nom2', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empNom2?: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'emp_ape1', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  empApe1: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'emp_ape2', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empApe2?: string;

  @property({
    type: 'string',
    length: 255,
    postgresql: {columnName: 'emp_noco', dataType: 'character', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empNoco?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'emp_imag', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  empImag?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'emp_sexo', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empSexo?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'emp_orig', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empOrig?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'emp_naci', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empNaci?: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'emp_boxm', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empBoxm?: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'emp_mail', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empMail?: string;

  @property({
    type: 'string',
    length: 100,
    postgresql: {columnName: 'emp_dire', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empDire?: string;

  @property({
    type: 'string',
    length: 20,
    postgresql: {columnName: 'emp_tele', dataType: 'character', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empTele?: string;

  @property({
    type: 'string',
    length: 20,
    postgresql: {columnName: 'emp_celu', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empCelu?: string;

  @property({
    type: 'string',
    length: 20,
    postgresql: {columnName: 'emp_bari', dataType: 'character', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empBari?: string;

  @property({
    type: 'string',
    length: 20,
    postgresql: {columnName: 'emp_ruta', dataType: 'character', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empRuta?: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    postgresql: {columnName: 'emp_civi', dataType: 'character', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  empCivi: string;

  @property({
    type: 'string',
    length: 20,
    postgresql: {columnName: 'tel_trab', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  telTrab?: string;

  @property({
    type: 'string',
    length: 20,
    postgresql: {columnName: 'tel_faxt', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  telFaxt?: string;

  @property({
    type: 'string',
    length: 20,
    postgresql: {columnName: 'tel_exte', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  telExte?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'pai_resi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  paiResi?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'dep_resi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  depResi?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'mun_resi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  munResi?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'pai_expe', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  paiExpe?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'dep_expe', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  depExpe?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'mun_expe', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  munExpe?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'pai_naci', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  paiNaci?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'dep_naci', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  depNaci?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'mun_naci', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  munNaci?: number;

  @property({
    type: 'string',
    length: 2,
    postgresql: {columnName: 'gra_educ', dataType: 'character', dataLength: 2, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  graEduc?: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'tit_obte', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  titObte?: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'pro_titu', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  proTitu?: string;

  @property({
    type: 'string',
    length: 20,
    postgresql: {columnName: 'mat_prof', dataType: 'character', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  matProf?: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    postgresql: {columnName: 'for_acad', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  forAcad: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'ano_spub', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  anoSpub?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'mes_spub', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  mesSpub?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'dia_spub', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  diaSpub?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'vin_spub', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  vinSpub?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'ano_spri', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  anoSpri?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'mes_spri', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  mesSpri?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'dia_spri', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  diaSpri?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'vin_spri', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  vinSpri?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'ano_sind', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  anoSind?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'mes_sind', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  mesSind?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'dia_sind', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  diaSind?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'vin_sind', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  vinSind?: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'ult_enti', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  ultEnti?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'per_carg', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  perCarg?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'cla_lmil', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  claLmil?: string;

  @property({
    type: 'string',
    length: 16,
    postgresql: {columnName: 'num_lmil', dataType: 'character varying', dataLength: 16, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  numLmil?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'dis_lmil', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  disLmil?: number;

  @property({
    type: 'string',
    length: 255,
    postgresql: {columnName: 'obs_inha', dataType: 'character', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  obsInha?: string;

  @property({
    type: 'string',
    length: 255,
    postgresql: {columnName: 'emp_obse', dataType: 'character', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empObse?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'emp_var1', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  empVar1?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'emp_var2', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  empVar2?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'emp_var3', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  empVar3?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'emp_var4', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empVar4?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'emp_var5', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empVar5?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'emp_var6', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  empVar6?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codempl', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codempl: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'nomempl', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nomempl: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'apeempl', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  apeempl: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'escvempl', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  escvempl: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'ccempl', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  ccempl: number;

  @property({
    type: 'string',
    length: 100,
    postgresql: {columnName: 'dirempl', dataType: 'character', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  dirempl?: string;

  @property({
    type: 'string',
    length: 30,
    postgresql: {columnName: 'telempl', dataType: 'character', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  telempl?: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'ciudempl', dataType: 'character', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  ciudempl?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codcargo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codcargo: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codsecc', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codsecc: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codesta', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codesta: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'codcent', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codcent?: string;

  @property({
    type: 'string',
    length: 100,
    postgresql: {columnName: 'dircoele', dataType: 'character', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  dircoele?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'codcia', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  codcia: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'codbenef', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  codbenef?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'tiponomi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  tiponomi?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'ccjefe', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  ccjefe?: number;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'almuerzo', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  almuerzo?: string;

  @property({
    type: 'string',
    length: 1,
    postgresql: {columnName: 'tip_sala', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  tipSala?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'feinempl', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  feinempl?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'fenaempl', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fenaempl?: string;

  @property({
    type: 'string',
    length: 30,
    postgresql: {columnName: 'dptoempl', dataType: 'character', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  dptoempl?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'suelempl', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  suelempl?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'emp_esta', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  empEsta?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'fec_camc', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecCamc?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'edc_codi', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  edcCodi?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'emp_ppin', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  empPpin?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'emp_auro', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  empAuro?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'emp_esin', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  empEsin?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'emp_esbt', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  empEsbt?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'emp_ndia', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  empNdia?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Nomaeemp>) {
    super(data);
  }
}

export interface NomaeempRelations {
  // describe navigational properties here
}

export type NomaeempWithRelations = Nomaeemp & NomaeempRelations;
