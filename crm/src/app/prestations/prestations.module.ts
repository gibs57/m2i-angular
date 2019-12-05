import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListPrestationsComponent } from './pages/page-list-prestations/page-list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageListPrestationsComponent, PageAddPrestationComponent, FormPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule { }
