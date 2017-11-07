import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TiendaService} from '../tienda.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [TiendaService]
})
export class ProductoComponent  implements OnInit{
    nombre : string;
   productos : Producto[];


  constructor(private activatedRoute : ActivatedRoute, private tiendaService: TiendaService) {

this.nombre= this.activatedRoute.snapshot.params['nombre'];

console.log(this.nombre)

}

ngOnInit() {
   this.getProducto(this.nombre);
}

getProducto(nombre){
  this.tiendaService.getProductos().subscribe(
     (data) => {
      let aux: any[] = [];
      for (let key in data) {
        if(data[key].nombre === nombre){
          aux.push(data[key]);
        }
      }
      this.productos = aux;
     });
}

}
