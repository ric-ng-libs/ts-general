import { IItem } from '../../modeles/_interfaces/IItem';

export interface IItemsService<T extends IItem> {
  getListe(): Array<T>;
  getById(psId: string): T;
}
