import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public vs: VersionService) { }

  ngOnInit() {
  }

  incrementVersion(){
    // next permet de mofifier le flux de donnée
    this.vs.version$.next(this.vs.version$.value + 1)
  }

}
