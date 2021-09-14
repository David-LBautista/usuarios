import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

//! Interface
import { User } from '../../interfaces/usuario.interface';

//! Servicios
import { SidenavService } from '../../services/sidenav.service';
import { UsuarioService } from '../../services/usuario.service';

//!Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//! Material
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit, OnChanges {

  @Input() user!: User;
  
  editform: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(
    public sideNavService: SidenavService,
    private uServivice: UsuarioService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
  ){ }
  
  //! Recibe el usuario desde el padre y cambia sus valores
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user.currentValue != changes.user.previousValue) {
      this.user = changes.user.currentValue[0];
      
      //! Ponemos los valores del usuario en los campos del form
      this.editform.reset({
        nombre: this.user.first_name,
        apellido: this.user.last_name,
        email: this.user.email
      })
    }
  }

  ngOnInit(): void {}
  
  //! Para abrir y cerrar la modal
  onToggle(){
    this.sideNavService.toggle();
  }
  
  //! Mostrar errores si los campos son invalid
  campoNoValido( campo:string ){
    return this.editform.controls?.[campo]?.errors && 
          this.editform.controls?.[campo]?.touched
  }


  editar() {
    const { nombre, apellido, email } = this.editform.value;
    this.uServivice.updateUser(nombre, apellido, email, this.user.id)
      .subscribe( response => {

        //! Mensaje personalizado con el snackbar
        this.mostrarSnackbar('Registro Actualizado...')
        
        //! Ver respuesta en consola segun la Api
        console.log(response)
      })
  }
  //! Snackbar
  mostrarSnackbar(mensaje:string){
    this._snackBar.open(mensaje, 'ok!',{
      duration: 3500,
    })
  }

}
