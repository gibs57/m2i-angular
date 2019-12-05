import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

const routes: Routes = [
  { path: '', component: PageListClientsComponent },
  { path: 'add', component: PageAddClientComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ClientsRoutingModule { }
