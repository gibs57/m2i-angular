import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state.enum';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
          // Utilisation de rxjs pour faire un filtre et transformer le tableau json par un tableau de Prestation
      // rxjs utilisé pour observable et map
      this.collection = this.http.get<any[]>(`${this.urlApi}clients`).pipe(
        // map((tab) => {
        //   return tab.map((obj) => {
        //     return new Prestation(obj);
        //   });
        // })
        // ou
        map(tab => tab.map(obj => new Client(obj)))
      );
   }

   get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  set collection(param: Observable<Client[]>){
    this.pCollection = param;
  }

  public update(item: Client, state: StateClient) {
    const obj = {...item};
    obj.state = state;
    return this.http.put(`${this.urlApi}clients/${item.id}`, obj);
  }
}
