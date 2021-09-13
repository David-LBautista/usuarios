import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Post } from '../interfaces/posts.interface';
import { Cases, User } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl:string = environment.baseUrl;


  public posts:Post[] = [];
  get postArray(){
    return [...this.posts]
  }

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios():Observable<Cases>{
    return this.http.get<Cases>(`${this.baseUrl}/api/users`)
  }

  getUsuario(id:number){
    return this.http.get(`${this.baseUrl}/api/users/${id}`)
  }

  getUsersPage(page:number){
    return this.http.get(`${this.baseUrl}/api/users?page=${page}`)
  }


  
  getPosts(id:number):Observable<Post[]>{
    const url = 'https://jsonplaceholder.typicode.com'
    return this.http.get<Post[]>(`${url}/posts?userId=${id}`)
    .pipe(
      map( data => this.posts = data)
    )
  }
  
}
