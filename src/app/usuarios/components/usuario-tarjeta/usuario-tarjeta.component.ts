import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {  User } from '../../interfaces/usuario.interface';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-usuario-tarjeta',
  templateUrl: './usuario-tarjeta.component.html',
  styleUrls: ['./usuario-tarjeta.component.scss']
})
export class UsuarioTarjetaComponent implements OnInit {



  @Input() usuario!: User;
  
  constructor(
    public sideNavService: SidenavService
  ) { }

  ngOnInit(): void {
  }

  onToggle(){
    this.sideNavService.toggle();
  }

}
