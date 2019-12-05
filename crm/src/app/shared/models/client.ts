import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/state.enum';

export class Client implements ClientI {
  id: number;
  name: string;
  email: string;
  state = StateClient.ACTIF;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }

  }
}
