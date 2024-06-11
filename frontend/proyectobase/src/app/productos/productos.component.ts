import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.dataService.getDatosTabla('productos').subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  filtrarProductos(filtros: any): void {
    this.dataService.filtrarProductos(filtros).subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al filtrar productos:', error);
      }
    );
  }

}
