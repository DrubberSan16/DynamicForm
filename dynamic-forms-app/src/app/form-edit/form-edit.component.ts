import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.scss'
})
export class FormEditComponent implements OnInit {
  formForm: FormGroup;
  formId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Inicializa el formulario con un FormGroup y un FormArray vacío
    this.formForm = this.fb.group({
      nameForm: [''],
      descriptionForm: [''],
      fields: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.formId = +this.route.snapshot.paramMap.get('id')!;
    if (this.formId) {
      this.formService.getForm(this.formId).subscribe((data) => {
        // Rellenar el formulario con los valores obtenidos
        this.formForm.patchValue({
          nameForm: data.nameForm,
          descriptionForm: data.descriptionForm,
        });
        this.setFields(data.configForm); // Llenar los campos dinámicos
      });
    }
  }

  get fields(): FormArray {
    return this.formForm.get('fields') as FormArray;
  }

  return(): void {    
    
    this.router.navigate([`/form`]);
  }
  
  setFields(configForm: string): void {
    const config = JSON.parse(configForm);
    const fieldsArray = this.fb.array(
      config.fields.map((field: any) =>
        this.fb.group({
          name: [field.name],
          type: [field.type],
        })
      )
    );
    this.formForm.setControl('fields', fieldsArray);
  }

  addField(): void {
    this.fields.push(
      this.fb.group({
        name: [''],
        type: ['text'],
      })
    );
  }

  removeField(index: number): void {
    this.fields.removeAt(index);
  }

  save(): void {
    const formData = this.formForm.value;
    const configForm = JSON.stringify({ fields: formData.fields });
    if (this.formId) {
      this.formService
        .updateForm(this.formId, {
          ...formData,
          configForm,
          id: this.formId,
          state: true,
          createdDate: new Date(),
          updatedDate: new Date()
        })
        .subscribe(() => {
          this.router.navigate(['/forms']);
        });
    } else {
      this.formService
        .createForm({
          ...formData,
          configForm,
          state: true,
          createdDate: new Date(),
          updatedDate: new Date()
        })
        .subscribe(() => {
          this.router.navigate(['/forms']);
        });
    }
  }
}