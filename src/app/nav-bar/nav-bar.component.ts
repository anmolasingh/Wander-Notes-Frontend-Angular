import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  myLocalStorage;
  
    constructor (public loginService:LoginService) {
      this.myLocalStorage=localStorage;
    }
  
  
    onClick() {
      if (this.loginService.checkLogin()) {
        this.loginService.logout();
      }
    }
}
