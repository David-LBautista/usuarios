import { Component, Input, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/usuario.interface';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() usuario!: User;

  get user(){
    return this.authService.token
  }
  
  constructor(
    public navService: SidenavService,
    private router: Router,
    private authService: AuthService
    
  ) { }

  ngOnInit(): void {
    
  }



}
