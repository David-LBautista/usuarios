import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Post } from '../interfaces/posts.interface';
import { Cases } from '../interfaces/usuario.interface';

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

  updateUser(nombre:string, apellido:string, id:number){
    const url:string = `https://reqres.in/api/users${id}`
    const body =  {nombre, apellido};
    return  this.http.put( url, body);
  }


  //! POSTS
  getPosts(id:number):Observable<Post[]>{
    const url = 'https://jsonplaceholder.typicode.com'
    return this.http.get<Post[]>(`${url}/posts?userId=${id}`)
    .pipe(
      map( data => this.posts = data)
    )
  }

  deletePost(id: number):Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com'
    return this.http.delete<any>(`${url}/posts/${id}`);
  }
  
}
