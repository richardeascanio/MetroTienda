import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//Servicio
import { ProductoService } from '../../../servicios/producto.service';

//Clase Producto
import { Producto } from '../../../modelos/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos();
    this.resetForm();
  }

  onSubmit(productoForm: NgForm){
    if(productoForm.value.$key==null)
      this.productoService.insertarProducto(productoForm.value)
    else
      this.productoService.editarProducto(productoForm.value);

    this.resetForm(productoForm);
  }

  resetForm(productoForm?: NgForm){
    if(productoForm!=null){
      productoForm.reset();
      this.productoService.productoSeleccionado = new Producto()
    }
  }

}
