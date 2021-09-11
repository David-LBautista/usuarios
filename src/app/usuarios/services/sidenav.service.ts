import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  public toggleNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { }


  public toggle(): void {
    this.toggleNav.next(!this.toggleNav.value);
  }

}
