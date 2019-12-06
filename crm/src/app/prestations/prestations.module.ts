import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormAddRowComponent } from './components/form-add-row/form-add-row.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';



@NgModule({
  declarations: [PageListPrestationsComponent, PageAddPrestationComponent, FormPrestationComponent, FormAddRowComponent, PageEditPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PrestationsModule { }
