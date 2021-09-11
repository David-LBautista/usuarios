import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Cases, User } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl:string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios():Observable<Cases>{
    return this.http.get<Cases>(`${this.baseUrl}/api/users`)
  }

  getUsuario(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/api/users/${id}`)
  }
  
}
