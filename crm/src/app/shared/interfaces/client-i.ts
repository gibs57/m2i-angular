import { StateClient } from '../enums/state.enum';

export interface ClientI {
  id: number;
  name: string;
  email: string;
  state: StateClient;
}

