import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getDatos(tabla: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/datos/${tabla}`);
  }

  // Métodos para Ventas
  getVentas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ventas`);
  }

  getVenta(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/ventas/${id}`);
  }

  saveVenta(venta: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ventas`, venta);
  }

  deleteVenta(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/ventas/delete`, { id });
  }

  // Métodos para Detalle
  getDetalles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/detalles`);
  }

  getDetalle(cdg_vta: number, id_prod: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/detalles/${cdg_vta}/${id_prod}`);
  }

  saveDetalle(detalle: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/detalles`, detalle);
  }

  deleteDetalle(cdg_vta: number, id_prod: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/detalles/delete`, { cdg_vta, id_prod });
  }
}
