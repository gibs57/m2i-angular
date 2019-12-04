import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI{
  id: number;
  typePresta: string;
  client: string;
  nbjours = 0;
  tjmHt = 1200;
  tauxTva = 20;
  state = State.OPTION;
  constructor(obj?: Partial<Prestation>) {
    if (obj) {
      Object.assign(this, obj);
    }

  }
  totalHt(): number {
    return this.tjmHt * this.nbjours;
  }
  totalTtc(tva?: number): number {
    if (tva) {
      if (tva <= 0) {
       return this.totalHt();
      }
      return this.totalHt() * (1 + tva / 100);
    }
    return this.totalHt() * (1 + this.tauxTva / 100);
  }


}
