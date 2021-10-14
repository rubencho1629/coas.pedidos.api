import { Model, model, property } from '@loopback/repository';

@model()
export class DrugStore extends Model {
  @property() codcia?: number;

  @property() nomdrog?: string;

  @property() coddrog?: number;

  @property() nitdrog?: number;

  @property() dirdrog?: string;

  @property() coddpto?: number;

  @property() dep_nomb?: string;

  @property() codmun?: number;

  @property() mun_nomb?: string;

  @property() barrio?: string;

  @property() revisita?: string;

  @property() diahabil?: number;

  @property() diarevis?: number;

  @property() tranfer?: string;

  constructor(data?: Partial<DrugStore>) {
    super(data);
  }
}

export interface DrugStoreRelations {
  // describe navigational properties here
}

export type DrugStoreWithRelations = DrugStore & DrugStoreRelations;
