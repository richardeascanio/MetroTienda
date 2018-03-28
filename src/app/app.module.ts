import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

//Componentes
import { ProductosComponent } from './componentes/productos/productos.component';
import { ListaProductosComponent } from './componentes/productos/lista-productos/lista-productos.component';
import { ProductoComponent } from './componentes/productos/producto/producto.component';

//Servicios
import { ProductoService } from './servicios/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListaProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCu4ScxPAFxEZb2Pv801JUBQHGwXnHiey0'
    })
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
