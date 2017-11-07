import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { Carrito } from '../carrito';
import { Observable } from 'rxjs/Rx';
import {TiendaService} from '../tienda.service';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css'],
  providers: [TiendaService, AuthService]
})

export class BarraComponent implements OnInit,OnChanges {

 public user$ = this.authService.user;
  numero: string = "";
  carrito: Carrito[];



  @Input() prod;

  constructor( private tiendaService: TiendaService, private authService: AuthService ) { }

  ngOnInit(){
    this.getCarritoUsuario();

  }

  ngOnChanges(){
    this.getCarritoUsuario();
  }


  getCarritoUsuario(){
  this.tiendaService.getCarrito().subscribe(
     (data) => {
      let aux: any[] = [];
      for (let key in data) {
        aux.push(data[key]);
      }
      this.carrito = aux;
      if(this.carrito.length.toString()!="0"){
        this.numero = this.carrito.length.toString()}
        else{this.numero=""}

     });
  }


  logout(){
    this.authService.logout();
  }


}
