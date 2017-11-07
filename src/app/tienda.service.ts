import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class TiendaService {

  constructor(private http: Http) { }


  getCarrito(): Observable<any> {
    const url = 'https://tienda2-c2b23.firebaseio.com/carritos/usuario.json'
    return this.http.get(url)
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
  }


  getProductos(): Observable<any> {
    const url = 'https://tienda2-c2b23.firebaseio.com/productos.json'
    return this.http.get(url)
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
  }


  sendProductos(productos: any){
    const url = 'https://tienda2-c2b23.firebaseio.com/carritos/usuario.json'
    const datos = JSON.stringify(productos);
    return this.http.post(url, datos)
      .map((response: Response)=> response.json())
  }

  limpiarCarro(){
    const url = 'https://tienda2-c2b23.firebaseio.com/carritos/usuario.json'
    return this.http.delete(url)
  }


}
