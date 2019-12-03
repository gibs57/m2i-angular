import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //public permet de sortir la variable du Typescript pour le mettre dans le HTML
  public title: string;
  constructor() {
  }

  ngOnInit() {
    this.title = 'Titre\s app';
  }

}
