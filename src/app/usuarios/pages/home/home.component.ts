import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { User, Cases } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuarios: User[] = [];

  respuesta: Cases = {
    data: []
  }

  constructor(
    private uService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.uService.getUsuarios()
      .subscribe( (response) => {
        this.respuesta = response;
        this.usuarios = this.respuesta.data;
      })
  }

}
