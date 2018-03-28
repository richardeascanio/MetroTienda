import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Producto } from '../modelos/producto';
import * as firebase from 'firebase';
import { reject } from 'q';

@Injectable()
export class ProductoService {

  listaProductos : AngularFireList<any>;
  productoSeleccionado: Producto = new Producto();

  constructor(private firebase: AngularFireDatabase) { }

  private basePath: string = '../modelos/producto';
  private uploadTask: firebase.storage.UploadTask;
  
  getProductos(){
    return this.listaProductos = this.firebase.list('productos');
  }

  insertarProducto(producto: Producto){

    let fileInput: any= document.getElementById('foto');

    let files = fileInput.files[0];

    let imgPromise=this.getFileBlob(files);  

    imgPromise.then(blob=>{

      this.listaProductos.push({
        nombre: producto.nombre,
        categoria: producto.categoria,
        locacion: producto.locacion,
        precio: producto.precio,
        foto: blob
      });

    })


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

  getFileBlob(file){
    // Instaciamos el lector de archivos
    var reader= new FileReader();

    return new Promise(function(resolve,reject){

      reader.onload=(function(theFile){
        return function(e){
          resolve(e.target.result);
        };
      })(file);
      reader.readAsDataURL(file);
    });
  }
}
