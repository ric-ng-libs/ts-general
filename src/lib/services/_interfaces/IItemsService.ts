import { IItem } from './../../modeles';

export interface IItemsService<T extends IItem> {
  getListe(): Array<T>;
  getById(psId: string): T;
}
