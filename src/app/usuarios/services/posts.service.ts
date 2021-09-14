import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public posts:Post[] = [];
  get postArray(){
    return [...this.posts]
  }

  constructor(
    private http: HttpClient
  ) { }


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
