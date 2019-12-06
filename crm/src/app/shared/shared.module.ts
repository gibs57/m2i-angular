import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { StateDirective } from './directives/state.directive';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [TotalPipe, TableauLightComponent, TableauDarkComponent, StateDirective, ButtonComponent, ActionBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbPopoverModule,
    FontAwesomeModule
  ],
  exports: [TotalPipe, TableauLightComponent, TableauDarkComponent, ButtonComponent, StateDirective, ActionBarComponent]
})
export class SharedModule { }
