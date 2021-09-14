import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../interfaces/usuario.interface';

import { SidenavService } from '../../services/sidenav.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  
  usuarios: User[] = [];
  usuario!: any;

  //!*PAGINADOR
  page:number = 1;

  respuesta: any = {
    data: []
  }

  constructor(
    private uService: UsuarioService,
    public sideNavService: SidenavService,
    public navService: SidenavService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.uService.getUsuarios()
      .subscribe( (response) => {
        this.respuesta = response;
        this.usuarios = this.respuesta.data;
      })
  }

  prevPage(){
    this.uService.getUsersPage(this.page - 1)
      .subscribe( response => {
        this.respuesta = response;
        this.usuarios = this.respuesta.data
      })
  }

  nextPage(){
    this.uService.getUsersPage(this.page + 1)
      .subscribe( response => {
        this.respuesta = response;
        this.usuarios = this.respuesta.data
      })
  }

  onToggle(user:User){
    this.sideNavService.toggle();
    this.usuario = this.usuarios.filter( usuario => user === usuario)
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['auth/login'])
  }

}
