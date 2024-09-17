import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataFormService } from '../services/data-form.service';
import { CommonModule } from '@angular/common';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form-data-create',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './form-data-create.component.html',
  styleUrl: './form-data-create.component.scss'
})
export class FormDataCreateComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  configForm: any;
  title: any = ''
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private route: ActivatedRoute,
    private dataFormService: DataFormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idForm = this.route.snapshot.paramMap.get('id'); 
  
    this.formService.getForm(Number.parseInt(idForm!)).subscribe({
      next: (config) => {
        console.log(config)
        if (config && config.configForm) {
          this.configForm = config.configForm;
          this.title = 'Crear '+ config.nameForm
          this.buildForm();
        } else {
          console.error("No se encontró 'configForm' o 'fields' en la configuración del formulario.");
        }
      },
      error: (err) => {
        console.error("Error al obtener la configuración del formulario:", err);
      }
    });
  }
  
  fields: any[] = [];

  buildForm() {
    const configForm = JSON.parse(this.configForm); // Convierte el JSON string a un objeto
    this.fields = configForm.fields;
    this.formGroup = this.fb.group({});
  
    this.fields.forEach((field: any) => {
      this.formGroup.addControl(
        field.name,
        new FormControl('')
      );
    });
    
  }
  
  return(): void {    
    const idForm = this.route.snapshot.paramMap.get('id'); 
    this.router.navigate([`/form-data/${idForm}`]);
  }

  onSubmit() {
    const idForm = this.route.snapshot.paramMap.get('id');
    const formData = {
      idForm: idForm,
      dataFrm: JSON.stringify(this.formGroup.value),
      state: true,
      createdDate: new Date(),
      updatedDate: new Date()
    };

    this.dataFormService.createDataForm(formData).subscribe(response => {      
      this.router.navigate([`/form-data/${idForm}`]);      
    });
  }
}
