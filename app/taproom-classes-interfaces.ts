module KegList {
  export interface IKeg {
    name: string;
    brand: string;
    price: number;
    alcoholContent: number;
  }

  export class Keg implements IKeg {
    constructor(public name: string, public brand: string, public price: number, public alcoholContent: number){}
  }
}
