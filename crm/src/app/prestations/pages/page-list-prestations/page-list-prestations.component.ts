import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/pretstation';
import { PrestationsService } from '../../services/prestations.service';
import { State } from 'src/app/shared/enums/state.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-list-prestations',
  templateUrl: './page-list-prestations.component.html',
  styleUrls: ['./page-list-prestations.component.scss']
})
export class PageListPrestationsComponent implements OnInit {
  public collection$: Observable<Prestation[]>;
  public states = State;
  public headers =  ['Type', 'Client', 'NbJours', 'TJM HT', 'Total HT', 'Total TTC', 'State'];
  constructor(private prestationsService: PrestationsService) {
   }

  ngOnInit() {
    // this.prestationsService.collection.subscribe((data) => {
    //   // console.log(data);
    //   this.collection = data;
    // });
    this.collection$ = this.prestationsService.collection;
  }

  changeState(item: any, event) {
    console.log(event.target.value);
    this.prestationsService.update(item, event.target.value).subscribe((res: Prestation) => {
      console.log(res);
      item.state = res.state;
    });
  }

}
