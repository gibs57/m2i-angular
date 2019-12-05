import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/pretstation';
import { PrestationsService } from '../../services/prestations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public init = new Prestation();
  constructor(private ps: PrestationsService, private router: Router) { }

  ngOnInit() {
  }

  public add(item: any) {
    this.ps.add(item).subscribe((res) => {
      this.router.navigate(['prestations']);
    });
  }

}
