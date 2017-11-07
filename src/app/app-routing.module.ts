import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BarraComponent} from './barra/barra.component';
import {CarritoComponent} from './carrito/carrito.component';
import {CatalogoComponent} from './catalogo/catalogo.component';
import {ProductoComponent} from './producto/producto.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'producto/:nombre', component: ProductoComponent},
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TiendaRoutingModule { }
