import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './vistas/home/home.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { TiendaComponent } from './vistas/tienda/tienda.component';
import { LoginComponent } from './vistas/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './vistas/producto/producto.component';
import { EnvioComponent } from './vistas/envio/envio.component';
import { FilterPipe } from './vistas/tienda/filter.pipe';
import { FinalCompraComponent } from './vistas/final-compra/final-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    TiendaComponent,
    LoginComponent,
    ProductoComponent,
    EnvioComponent,
    FilterPipe,
    FinalCompraComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
