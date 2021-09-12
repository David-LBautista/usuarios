import { Component, OnInit } from '@angular/core';
import { Cases, User } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  usuarios: User[] = [];

  respuesta: Cases = {
    data: []
  }

  constructor(
    private uService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.uService.getUsuarios()
      .subscribe( (response) => {
        this.respuesta = response;
        this.usuarios = this.respuesta.data;
      })
  }

}