import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/pretstation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
      // // Utilisation de rxjs pour faire un filtre et transformer le tableau json par un tableau de Prestation
      // // rxjs utilisé pour observable et map
      // this.collection = this.http.get<any[]>(`${this.urlApi}prestations`).pipe(
      //   // map((tab) => {
      //   //   return tab.map((obj) => {
      //   //     return new Prestation(obj);
      //   //   });
      //   // })
      //   // ou
      //   map(tab => tab.map(obj => new Prestation(obj)))
      // );

            // Utilisation de rxjs pour faire un filtre et transformer le tableau json par un tableau de Prestation
      // rxjs utilisé pour observable et map

      this.initCollection();

   }

   initCollection() {
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}prestations`).pipe(
      // map(tab => tab.map(obj => new Prestation(obj) ) )
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
  }

  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  set collection(param: Observable<Prestation[]>){
    this.pCollection = param;
  }

  public update(item: Prestation, state?: State) {
    const obj = {...item};
    if (state) {
      obj.state = state;
    }
    return this.http.put(`${this.urlApi}prestations/${item.id}`, obj);
  }

  public add(item: any) {
    return this.http.post(`${this.urlApi}prestations`, item);
  }

  public delete(item: any) {
    return this.http.delete(`${this.urlApi}prestations/${item.id}`);
  }

  public getItemById(id) {
    return this.http.get<Prestation>(`${this.urlApi}prestations/${id}`);
  }
}
