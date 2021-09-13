import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { SidenavService } from '../../services/sidenav.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit, OnChanges {

  @Input() user!: User;

  editform: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required]
  })

  constructor(
    public sideNavService: SidenavService,
    private uServivice: UsuarioService,
    private fb: FormBuilder,
  ){ }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user.currentValue != changes.user.previousValue) {
      this.user = changes.user.currentValue[0];

      this.editform.reset({
        nombre: this.user.first_name,
        apellido: this.user.last_name,
      })
    }
  }

  ngOnInit(): void {

  }

  onToggle(){
    this.sideNavService.toggle();
  }

  editar() {
    const { nombre, apellido } = this.editform.value;

    this.uServivice.updateUser(nombre, apellido, this.user.id)
      .subscribe( response => {
        console.log(response)
      })
  }

}
