import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PageNotFoundRoutingModule { }
