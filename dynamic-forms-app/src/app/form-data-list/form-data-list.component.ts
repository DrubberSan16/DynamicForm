import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFormService } from '../services/data-form.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-form-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-data-list.component.html',
  styleUrl: './form-data-list.component.scss'
})
export class FormDataListComponent implements OnInit {
  formId: number | null = null;
  data: any[] = [];
  objectKeys = Object.keys;

  constructor(private route: ActivatedRoute, private dataFormService: DataFormService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.formId = +this.route.snapshot.paramMap.get('id')!;
    if (this.formId) {
      this.loadData();       
      console.log(this.data)     
    }
  }

  async loadData(): Promise<void> {
   await this.dataFormService.getDataForms(this.formId!).subscribe(data => {
    console.log(data);
      this.data = data.map((item: any) => ({
        ...item,
        dataFrm: item.dataFrm ? JSON.parse(item.dataFrm) : {} 
      }));
      console.log('Datos procesados:', this.data);
      this.cdr.detectChanges();
    });    
  }

  return(): void {    
    
    this.router.navigate([`/form`]);
  }

  createData(): void {    
    this.router.navigate([`/form-data/create/${this.formId}`]);
  }

  editData(id: number): void {
    this.router.navigate([`/form-data/edit/${this.formId}/${id}`]);
  }

  deleteData(id: number): void {
    this.dataFormService.deleteDataForm(id).subscribe(() => {
      this.loadData();
    });
  }
}