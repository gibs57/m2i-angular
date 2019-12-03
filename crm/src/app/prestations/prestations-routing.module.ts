import { NgModule } from '@angular/core';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';
import { Routes, RouterModule } from '@angular/router';

// Son role est de gérer la route et l'instanciation du composant. On aurait pu le mettre dans prestations module

const routes: Routes = [
  { path: '', component: PageListPrestationsComponent },
];

// ForChild, c'est pour importer une route Lazyloadé
// http://localhost:4200/prestations/prestations

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PrestationsRoutingModule { }