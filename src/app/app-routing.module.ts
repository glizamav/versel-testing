import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { LoginComponent } from './vistas/login/login.component';
import { ProductoComponent } from './vistas/producto/producto.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { TiendaComponent } from './vistas/tienda/tienda.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'producto', component: ProductoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
