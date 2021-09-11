import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { User } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

    usuario:User = {
      id: 0,
      avatar: '',
      first_name: '',
      last_name: '',
      email: ''
    }

  constructor(

    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
    .pipe(
      //switchMap( ({id}) => this.hService.getHeroe(id))
    )
    //.subscribe( heroe => this.heroe = heroe)
  }

}
