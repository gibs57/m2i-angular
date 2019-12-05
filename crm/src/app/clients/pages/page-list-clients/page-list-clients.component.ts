import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state.enum';
import { Observable } from 'rxjs';
import { ClientsService } from '../../service/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public states = StateClient;
  public headers =  ['Name', 'Email', 'State'];
  public label = 'Ajouter client';
  public route = 'add';
  constructor(private clientsService: ClientsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.collection$ = this.clientsService.collection;
  }

  changeState(item: any, event) {
    console.log(event.target.value);
    this.clientsService.update(item, event.target.value).subscribe((res: Client) => {
      console.log(res);
      item.state = res.state;
      this.cdr.markForCheck();
    });
  }

}
