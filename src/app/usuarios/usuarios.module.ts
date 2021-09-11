import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import { MaterialModule } from '../material/material.module';

//Routing
import { UsuariosRoutingModule } from './usuarios-routing.module';

// Components
import { HomeComponent } from './pages/home/home.component';
import { UsuarioTarjetaComponent } from './components/usuario-tarjeta/usuario-tarjeta.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PostsComponent } from './pages/posts/posts.component';


@NgModule({
  declarations: [
    HomeComponent,
    UsuarioTarjetaComponent,
    EditarComponent,
    ListadoComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
