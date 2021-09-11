import { Component, Input, OnInit } from '@angular/core';
import {  User } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-usuario-tarjeta',
  templateUrl: './usuario-tarjeta.component.html',
  styleUrls: ['./usuario-tarjeta.component.scss']
})
export class UsuarioTarjetaComponent implements OnInit {

  @Input() usuario!: User;
  
  constructor() { }

  ngOnInit(): void {
  }

}
