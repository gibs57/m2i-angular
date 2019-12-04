import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/pretstation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;
  constructor(private http: HttpClient) {
      // Utilisation de rxjs pour faire un filtre et transformer le tableau json par un tableau de Prestation
      // rxjs utilisé pour observable et map
      this.collection = this.http.get<any[]>('http://localhost:3000/prestations').pipe(
        // map((tab) => {
        //   return tab.map((obj) => {
        //     return new Prestation(obj);
        //   });
        // })
        // ou
        map(tab => tab.map(obj => new Prestation(obj)))
      );
   }

  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  set collection(param: Observable<Prestation[]>){
    this.pCollection = param;
  }
}
