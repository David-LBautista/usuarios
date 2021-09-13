import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

//! Material
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [ Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  campoNoValido( campo:string ){
    return this.loginForm.controls?.[campo]?.errors && 
          this.loginForm.controls?.[campo]?.touched
  }


  ingresar(){
    const { email, password} = this.loginForm.value;
    this.authService.login(email, password)
      .subscribe( response => {
        if (response) {
          this.router.navigate(['usuarios/listado'])
        }else{
          this.loginForm.markAllAsTouched();
          this.mostrarSnackbar('No se encontro el usuario...')
        }
      })
  }

  mostrarSnackbar(mensaje:string){
    this._snackBar.open(mensaje, 'Cerrar',{
      duration: 2500
    })
  }

}
