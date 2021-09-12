import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SidenavService } from '../../services/sidenav.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  usuario!: any;

  user = {
    id: 0,
    avatar: '',
    first_name: '',
    last_name: '',
    email: ''
  }

  editform: FormGroup = this.fb.group({
    nombre: ['Hola']
  })

  constructor(
    private router: Router,
    public sideNavService: SidenavService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log('Hola desde editar component')
  }

  onToggle(){
    this.sideNavService.toggle();
  }

  irListado(){
    this.router.navigate(['usuarios/listado']);
  }

}
