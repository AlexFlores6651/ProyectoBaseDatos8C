import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:3000/api/tabla'; // URL del endpoint en el servidor

  constructor(private http: HttpClient) { }

  // Método para obtener datos de una tabla específica
  getDatosTabla(nombreTabla: string): Observable<any[]> {
    const url = `${this.baseUrl}/${nombreTabla}`;
    return this.http.get<any[]>(url);
  }

  // Método para filtrar productos por precio, cantidad y disponibilidad
  filtrarProductos(filtros: any): Observable<any[]> {
    const url = `${this.baseUrl}/productos/filtrar`;
    return this.http.post<any[]>(url, filtros);
  }
}
