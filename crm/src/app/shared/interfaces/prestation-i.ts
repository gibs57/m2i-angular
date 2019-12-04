import { State } from '../enums/state.enum';

export interface PrestationI {
  id: number;
  typePresta: string;
  client: string;
  nbjours: number;
  tjmHt: number;
  tauxTva: number;
  state: State;
  totalHt(): number;
  totalTtc(): number;
}
