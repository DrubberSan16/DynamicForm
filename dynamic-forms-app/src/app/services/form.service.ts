import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'https://9nhrp5ml-8080.use2.devtunnels.ms/api/form';

  constructor(private http: HttpClient) { }

  getForms(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getForm(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createForm(form: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, form);
  }

  updateForm(id: number, form: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, form);
  }

  deleteForm(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
