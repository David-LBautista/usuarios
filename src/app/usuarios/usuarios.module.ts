import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import { MaterialModule } from '../material/material.module';

//Routing
import { UsuariosRoutingModule } from './usuarios-routing.module';

// Components
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';


@NgModule({
  declarations: [
    HomeComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
