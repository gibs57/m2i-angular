import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { StateDirective } from './directives/state.directive';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TotalPipe, TableauLightComponent, TableauDarkComponent, StateDirective, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TotalPipe, TableauLightComponent, TableauDarkComponent, ButtonComponent, StateDirective]
})
export class SharedModule { }
