import { Component, Input, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/usuario.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() usuario!: User;

  constructor(
    public navService: SidenavService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    
  }

  logOut(){
    this.router.navigate(['auth/login'])
  }

}
