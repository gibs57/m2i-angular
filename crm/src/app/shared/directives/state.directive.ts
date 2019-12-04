import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any;
  @HostBinding('class') hostClassName: string;
  constructor() {
  }
  ngOnChanges() {
    console.log(this.appState);
    this.hostClassName = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}
// this.appState vaut Annulé => state-annule
// this.appState vaut Option => state-option
// this.appState vaut Confirmé => state-confirme
// Binder l'attribut class du host element <td> avec state-annule, state-option ou state-confirme
