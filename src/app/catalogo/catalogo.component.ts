import { Component, OnInit, NgModule} from '@angular/core';
import {TiendaService} from '../tienda.service';
import { Producto } from '../producto';
import { Carrito } from '../carrito';
import { FiltroPipe } from '../filtro.pipe';
import {AuthService} from '../auth.service';



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers: [TiendaService, AuthService]
})
export class CatalogoComponent implements OnInit {


  productos: Producto[];
  carrito: Carrito[];
   prod = "";


  constructor(private tiendaService: TiendaService, private authService: AuthService) {


  }


  ngOnInit() {
    this.getProductosTienda();
  }


getProductosTienda(){
  this.tiendaService.getProductos().subscribe(
     (data) => {
      let aux: any[] = [];
      for (let key in data) {
        aux.push(data[key]);
      }
      this.productos = aux;
     });
}


  addCarrito(nombre: string, precio: string, qt: string, imagen: string) {
    if (qt != null) {
        this.tiendaService.sendProductos({ nombre: nombre, precio: precio, qt: qt, imagen: imagen })
          .subscribe(
          (data) => this.produ(data)
          )
      }
    }


    produ(data){
      this.prod = data;
    }



  }
