import { Model, model, property } from '@loopback/repository';

@model()
export class UserProfile extends Model {
  @property() usuario?: number;

  @property() ccempl?: string;

  @property() codempl?: number;

  @property() emp_noco?: number;

  @property() nombre?: string;

  @property() codvende?: number;

  @property() nomabrev?: string;

  constructor(data?: Partial<UserProfile>) {
    super(data);
  }
}

export interface UserProfileRelations {
  // describe navigational properties here
}

export type UserProfileWithRelations = UserProfile & UserProfileRelations;
