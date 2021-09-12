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

  getUsuario(id:number){
    return this.http.get(`${this.baseUrl}/api/users/${id}`)
  }

  getPosts(id:number){
    const url = 'https://jsonplaceholder.typicode.com'
    return this.http.get(`${url}/posts?userId=${id}`)
  }
  
}
