import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../interfaces/auth.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token!: any;

  get token(){
    return { ...this._token }
  }

  constructor(
    private http: HttpClient
  ) { }

  login(email:string, password:string){
    const url:string = 'https://reqres.in/api/login'
    const body =  {email, password};
    return  this.http.post<AuthResponse>( url, body)
      .pipe(
        tap( resp => {
          if (resp.token) {
            this._token = resp.token
          }
        }),
        map( resp => resp.token),
        catchError( err => of(false) )
      )
  }


}
