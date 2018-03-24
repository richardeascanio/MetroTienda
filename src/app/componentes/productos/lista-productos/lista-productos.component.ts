import { Component, OnInit } from '@angular/core';

//Servicio
import { ProductoService } from'../../../servicios/producto.service'
import { ToastrService } from 'ngx-toastr'

//clase Producto
import{ Producto } from '../../../modelos/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  listaProducto: Producto[];

  constructor(private productoService: ProductoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.productoService.getProductos()
    .snapshotChanges()
    .subscribe(item => {
      this.listaProducto = [];
      item.forEach(elemento =>{
        let x = elemento.payload.toJSON();
        x["$key"] = elemento.key;
        this.listaProducto.push(x as Producto);
      })
    })
  }

  onEdit(producto: Producto){
    this.productoService.productoSeleccionado = Object.assign({}, producto);
  }

  onDelete($key: string){
    if(confirm('Estas seguro de eliminar este producto?')){
      this.productoService.eliminarProducto($key);
    }
  }

}
