import { Component, OnInit} from '@angular/core';
import { Carrito } from '../carrito';
import {TiendaService} from '../tienda.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [TiendaService]
})
export class CarritoComponent implements OnInit{

  carrito: Carrito[];
  total: number = 0;

  constructor(private tiendaService: TiendaService,private router: Router ) { }

  ngOnInit() {
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
      this.getTotal();
     });
  }

  getTotal(){

    let i = 0;
    let sum = 0;
    let cu = "";
    let ncu = 0;
    let pre = "";
    let npre = 0;
    let to = 0;
    let tot = 0;

    for (i = 0; i < this.carrito.length; i++) {
      cu = this.carrito[i].qt;
      pre = this.carrito[i].precio;
      ncu = +cu;
      npre = +pre;
      to = ncu * npre;
      tot = tot + to;
    }

    this.total = tot;
  }


  calcularcompra(){


     this.limpiarcarro();
  }

  limpiarcarro(){
    this.tiendaService.limpiarCarro().subscribe(
      success => this.router.navigate(['/catalogo']),
      error => alert(error.message));
  }


}
