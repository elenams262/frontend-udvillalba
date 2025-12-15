import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Usar Observable para manejar peticiones asíncronas

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api'; // La URL base de tu backend

  constructor(private http: HttpClient) {}

  // GET /api/clasificacion
  getClasificacion(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clasificacion`);
  }

  // GET /api/jornada
  getProximoPartido(): Observable<any> {
    return this.http.get(`${this.apiUrl}/jornada`);
  }

  // POST /api/auth/login
  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credenciales);
  }
}
