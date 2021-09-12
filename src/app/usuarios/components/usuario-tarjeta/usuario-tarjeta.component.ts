import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/usuario.interface';
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
    console.log(this.usuario.id);
  }

}
