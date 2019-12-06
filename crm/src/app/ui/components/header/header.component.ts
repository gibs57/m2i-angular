import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // public permet de sortir la variable du Typescript pour le mettre dans le HTML
  public title: string;
  public version$: BehaviorSubject<number>;
  constructor(private vs: VersionService) {
    // public : on peut y accéder directement depuis le htlm
  }

  ngOnInit() {
    this.title = 'Cyril Angular application\s app';
    this.version$ = this.vs.version$;
  }

}
