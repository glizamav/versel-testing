import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { EnvioComponent } from './vistas/envio/envio.component';
import { FinalCompraComponent } from './vistas/final-compra/final-compra.component';
import { HomeComponent } from './vistas/home/home.component';
import { LoginComponent } from './vistas/login/login.component';
import { PagoComponent } from './vistas/pago/pago.component';
import { ProductoComponent } from './vistas/producto/producto.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { TiendaComponent } from './vistas/tienda/tienda.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'envio', component: EnvioComponent},
  { path: 'gracias', component: FinalCompraComponent},
  { path: 'pago', component: PagoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
