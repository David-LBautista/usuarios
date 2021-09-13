import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Cases } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl:string = environment.baseUrl;


  

  constructor(
    private http: HttpClient
  ) { }
  
  //! USUARIOS
  getUsuarios():Observable<Cases>{
    return this.http.get<Cases>(`${this.baseUrl}/api/users`)
  }

  getUsuario(id:number){
    return this.http.get(`${this.baseUrl}/api/users/${id}`)
  }

  getUsersPage(page:number){
    return this.http.get(`${this.baseUrl}/api/users?page=${page}`)
  }

  updateUser(nombre:string, apellido:string, email:string, id:number){
    const url:string = `https://reqres.in/api/users${id}`
    const body =  {nombre, apellido, email};
    return  this.http.put( url, body);
  }
}
