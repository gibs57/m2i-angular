import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PrestationsService } from '../../services/prestations.service';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/pretstation';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  item$: Observable<Prestation>;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: PrestationsService
  ) { }

  ngOnInit() {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = params.get('id');
        return this.ps.getItemById(params.get('id'));
      }
      )
    );
  }

  update(item: any) {
    item.id = this.id;
    this.ps.update(item).subscribe((res) => {
      this.router.navigate(['prestations']);
    });
  }

}
