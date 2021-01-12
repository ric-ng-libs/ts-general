import { IEntity } from './IEntity';

export interface IItem extends IEntity {
  getLabel(): string;
}
