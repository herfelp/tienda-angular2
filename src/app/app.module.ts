import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { AuthService } from './auth.service';
import { TiendaService } from './tienda.service';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductoComponent } from './producto/producto.component';
import { TiendaRoutingModule } from './app-routing.module';
import { FiltroPipe } from './filtro.pipe';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    CatalogoComponent,
    ProductoComponent,
    CarritoComponent,
    FiltroPipe,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TiendaRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule

  ],
  providers: [TiendaService, AuthService, AngularFireAuth,AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
