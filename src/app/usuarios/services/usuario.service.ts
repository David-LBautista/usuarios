import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Datum } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl:string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<Datum[]>{
    return this.http.get<Datum[]>(`${this.baseUrl}/api/users`)
  }
  
}
