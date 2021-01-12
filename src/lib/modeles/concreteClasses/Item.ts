import { IItem } from './../interfaces';

export class Item implements IItem {

  constructor(private id: number, private label: string) {

  }

  getId(): number {
    return(this.id);
  }
  
  getLabel(): string {
    return(this.label);
  }

}
