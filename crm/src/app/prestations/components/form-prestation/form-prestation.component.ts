import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prestation } from 'src/app/shared/models/pretstation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  @Input() item: Prestation;
  @Output() nItem: EventEmitter<any> = new EventEmitter();
  public states = State;
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [this.item.typePresta ? this.item.typePresta : '', Validators.required],
      client: [this.item.client ? this.item.client : '', Validators.compose([Validators.required, Validators.minLength(3)])],
      nbjours: [this.item.nbjours ? this.item.nbjours : ''],
      tjmHt: [this.item.tjmHt ? this.item.tjmHt : ''],
      tauxTva: [this.item.tauxTva ? this.item.tauxTva : ''],
      state: [this.item.state ? this.item.state : ''],
    });
  }

  public onSubmit(){
    // console.log(this.form.value);
    this.nItem.emit(this.form.value);
  }

}
