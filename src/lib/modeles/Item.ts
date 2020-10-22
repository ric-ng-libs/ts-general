import { IItem } from './_interfaces';

export class Item implements IItem {
  constructor(private sId: string, private sLabel: string) {

  }

  getId(): string {
    return(this.sId);
  }
  getLabel(): string {
    return(this.sLabel);
  }

}
