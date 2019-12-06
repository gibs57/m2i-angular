import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddRowComponent } from './form-add-row.component';

describe('FormAddRowComponent', () => {
  let component: FormAddRowComponent;
  let fixture: ComponentFixture<FormAddRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
