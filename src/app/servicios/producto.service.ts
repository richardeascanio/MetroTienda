import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Producto } from '../modelos/producto';

@Injectable()
export class ProductoService {

  listaProductos : AngularFireList<any>;
  productoSeleccionado: Producto = new Producto();

  constructor(private firebase: AngularFireDatabase) { }

  getProductos(){
    return this.listaProductos = this.firebase.list('productos');
  }

  insertarProducto(producto: Producto){
    this.listaProductos.push({
      nombre: producto.nombre,
      categoria: producto.categoria,
      locacion: producto.locacion,
      precio: producto.precio
    });
  }

  editarProducto(producto: Producto){
    this.listaProductos.update(producto.$key, {
      nombre: producto.nombre,
      categoria: producto.categoria,
      locacion: producto.locacion,
      precio: producto.precio
    });
  }

  eliminarProducto($key: string){
    this.listaProductos.remove($key);
  }

  getListaconFiltro(filtro: string) {
    return this.listaProductos = this.firebase.list('/productos', ref => ref.orderByChild('locacion').equalTo(filtro));
  }
}
