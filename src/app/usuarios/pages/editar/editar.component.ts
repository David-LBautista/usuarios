import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/usuario.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  usuario: User = {
    id: 0,
    avatar: '',
    first_name: '',
    last_name: '',
    email: '',
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private uService: UsuarioService
  ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.uService.getUsuario(id))
    )
    .subscribe( usuario => console.log(usuario))
  }

}
