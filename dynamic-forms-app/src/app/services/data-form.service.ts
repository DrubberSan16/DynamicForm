import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {
  private apiUrl = 'http://localhost:8080/api/dataForm';

  constructor(private http: HttpClient) { }

  getDataForms(formId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/formId/${formId}`);
  }

  getDataFormId(formId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${formId}`);
  }

  createDataForm(dataForm: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dataForm);
  }

  updateDataForm(id: number, dataForm: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, dataForm);
  }

  deleteDataForm(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
