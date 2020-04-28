import { IItem } from '../../modeles/_interfaces/IItem';

export abstract class AItemsService<T extends IItem> {
  public abstract getListe(): Array<T>;

  public getById(psId: string): T {
    let oFoundItem: T = null;
    //
    const aItems: Array<T> = this.getListe();
    const iNbItems: number = aItems.length;
    let oItem: T;
    for (let iNumItem = 0; iNumItem < iNbItems; iNumItem++) {
      oItem = aItems[iNumItem];
      if ( psId === oItem.getId() ) {
        oFoundItem = oItem;
        break;
      }
    }
    return(oFoundItem);
  }
}
