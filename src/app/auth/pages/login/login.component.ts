import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

//! Sweet alert
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [ Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
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
          Swal.fire({
            background: "#fff",
            text: `No se encontro el usuario: ${email}`,
          })
        }
      })
  }

}
