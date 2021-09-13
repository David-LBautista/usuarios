import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ValidaTokenGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ){
  }

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validaToken();
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authService.validaToken();
  }

}
