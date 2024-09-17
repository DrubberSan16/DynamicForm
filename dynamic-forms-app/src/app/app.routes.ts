import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDataListComponent } from './form-data-list/form-data-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormDataCreateComponent } from './form-data-create/form-data-create.component';
import { FormDataEditComponent } from './form-data-edit/form-data-edit.component';

export const routes: Routes = [
    { path: 'forms', component: FormListComponent },
    { path: 'edit-form/:id', component: FormEditComponent },
    { path: 'edit-form', component: FormEditComponent },
    { path: 'form-data/:id', component: FormDataListComponent },
    { path: 'form-data/create/:id', component: FormDataCreateComponent },
    { path: 'form-data/edit/:formId/:dataId', component: FormDataEditComponent },
    { path: '', redirectTo: '/forms', pathMatch: 'full' },
    { path: '**', redirectTo: '/forms' } 
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
