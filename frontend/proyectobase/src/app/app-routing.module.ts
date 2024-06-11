import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes que quieres usar en las rutas
import { ProductosComponent } from './productos/productos.component'; // Ajusta la ruta según tu estructura

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
