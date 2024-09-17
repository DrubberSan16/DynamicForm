import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataCreateComponent } from './form-data-create.component';

describe('FormDataCreateComponent', () => {
  let component: FormDataCreateComponent;
  let fixture: ComponentFixture<FormDataCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDataCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDataCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
