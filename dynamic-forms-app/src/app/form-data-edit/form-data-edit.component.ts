import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataFormService } from '../services/data-form.service';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form-data-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './form-data-edit.component.html',
  styleUrls: ['./form-data-edit.component.scss']
})
export class FormDataEditComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  configForm: any;
  fields: any[] = [];
  title: string = '';

  constructor(
    private fb: FormBuilder,
    private dataFormService: DataFormService,
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idForm = +this.route.snapshot.paramMap.get('formId')!;
    const dataId = +this.route.snapshot.paramMap.get('dataId')!;
    
    // Obtener la configuración del formulario
    this.formService.getForm(idForm).subscribe(config => {
      if (config && config.configForm) {
        this.configForm = JSON.parse(config.configForm);
        this.fields = this.configForm.fields;
        this.title = 'Editar ' + config.nameForm;
        this.buildForm(dataId);
      } else {
        console.error("No se encontró 'configForm' o 'fields' en la configuración del formulario.");
      }
    });

    // Obtener los datos existentes
    if (dataId) {
      this.dataFormService.getDataFormId(dataId).subscribe(data => {
        const existingData = JSON.parse(data.dataFrm);
        this.formGroup.patchValue(existingData);
      });
    }
  }

  buildForm(dataId: number) {
    this.formGroup = this.fb.group({});
    this.fields.forEach(field => {
      this.formGroup.addControl(
        field.name,
        new FormControl('')
      );
    });
  }

  return(): void {    
    const idForm = this.route.snapshot.paramMap.get('formId'); 
    this.router.navigate([`/form-data/${idForm}`]);
  }

  save(): void {
    const idForm = +this.route.snapshot.paramMap.get('formId')!;
    const dataId = +this.route.snapshot.paramMap.get('dataId')!;
    
    const formData = {
      id: dataId,
      idForm: idForm,
      dataFrm: JSON.stringify(this.formGroup.value),
      state: true,
      createdDate: new Date(),
      updatedDate: new Date()
    };

    this.dataFormService.updateDataForm(dataId, formData).subscribe(() => {
      this.router.navigate([`/form-data/${idForm}`]);
    });
  }
}
