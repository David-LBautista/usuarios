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

  ingresar(){
    const { email, password} = this.loginForm.value;
    console.log(email, password)
    this.authService.login(email, password)
      .subscribe( response => {
        if (response) {
          console.log(response)
          this.router.navigate(['usuarios/listado'])
        }else{
          Swal.fire({
            background: "#fff",
            text: "No se encontro el usuario",
          })
        }
      })
    
  }

}
