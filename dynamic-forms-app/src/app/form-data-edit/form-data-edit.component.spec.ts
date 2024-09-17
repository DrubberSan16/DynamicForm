import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataEditComponent } from './form-data-edit.component';

describe('FormDataEditComponent', () => {
  let component: FormDataEditComponent;
  let fixture: ComponentFixture<FormDataEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDataEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
