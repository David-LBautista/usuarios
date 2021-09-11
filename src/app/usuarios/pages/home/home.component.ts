import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Datum } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuarios: Datum[] = [];

  constructor(
    private uService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.uService.getUsuarios()
      .subscribe( usuarios => {
        this.usuarios = usuarios;
      })
  }

}
