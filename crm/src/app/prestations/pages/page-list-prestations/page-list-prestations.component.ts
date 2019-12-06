import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Prestation } from 'src/app/shared/models/pretstation';
import { PrestationsService } from '../../services/prestations.service';
import { State } from 'src/app/shared/enums/state.enum';
import { Observable, BehaviorSubject } from 'rxjs';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-page-list-prestations',
  templateUrl: './page-list-prestations.component.html',
  styleUrls: ['./page-list-prestations.component.scss']
})
export class PageListPrestationsComponent implements OnInit {
  public collection$: Observable<Prestation[]>;
  public states = State;
  public label = 'Ajouter prestataire';
  public route = 'add';
  public headers =  ['Type', 'Client', 'NbJours', 'Taux TVA', 'TJM HT', 'Total HT', 'Total TTC', 'State', 'Action'];
  public init = new Prestation();
  constructor(private prestationsService: PrestationsService, private cdr: ChangeDetectorRef, private router: Router) {
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
      this.cdr.markForCheck();
    });
  }

  addItem() {
    console.log(this.init);
    this.prestationsService.add({...this.init}).subscribe((res) => {
      console.log(res);
      this.prestationsService.initCollection();
      this.collection$ = this.prestationsService.collection;
      this.cdr.markForCheck();
      this.init = new Prestation();
    });
  }
  changeItem() {
    console.log(this.init);
  }

  delete(item) {
    console.log(item);
    this.prestationsService.delete(item).subscribe((res) => {
      // traiter la response de l'api
      this.prestationsService.initCollection();
      this.collection$ = this.prestationsService.collection;
      this.cdr.markForCheck();
    });

  }
  edite(item) {
    console.log(item);
    this.router.navigate(['prestations/edit', item.id]);

  }


}
