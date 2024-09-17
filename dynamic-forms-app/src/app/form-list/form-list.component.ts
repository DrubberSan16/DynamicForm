import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.scss'
})
export class FormListComponent implements OnInit {
  forms: any[] = [];

  constructor(private formService: FormService, private router: Router) {}

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms(): void {
    this.formService.getForms().subscribe(data => {
      this.forms = data;
    });
  }

  createForm(): void {
    this.router.navigate(['/edit-form']);
  }

  editForm(id: number): void {
    this.router.navigate([`/edit-form/${id}`]);
  }

  openForm(id: number): void {
    this.router.navigate([`/form-data/${id}`]);
  }

  deleteForm(id: number): void {
    this.formService.deleteForm(id).subscribe(() => {
      this.loadForms();
    });
  }
}