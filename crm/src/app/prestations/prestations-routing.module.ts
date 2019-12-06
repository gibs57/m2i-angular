import { NgModule } from '@angular/core';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';
import { Routes, RouterModule } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';

// Son role est de gérer la route et l'instanciation du composant. On aurait pu le mettre dans prestations module

const routes: Routes = [
  { path: '', component: PageListPrestationsComponent },
  { path: 'add', component: PageAddPrestationComponent },
  { path: 'edit/:id', component: PageEditPrestationComponent }
];

// ForChild, c'est pour importer une route Lazyloadé
// http://localhost:4200/prestations/prestations

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PrestationsRoutingModule { }
