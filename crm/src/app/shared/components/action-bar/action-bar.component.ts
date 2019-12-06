import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  @Output() del: EventEmitter<boolean> = new EventEmitter<boolean>(null);
  @Output() editer: EventEmitter<boolean> = new EventEmitter<boolean>(null);
  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.del.emit();
  }
  edit() {
    // console.log('edit');
    this.editer.emit();
  }

}
