import { Component, OnInit } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = {'username':'', 'password':''};
  currentUserName;
  errorVar: boolean = false;

  constructor (public loginService: LoginService){
    this.currentUserName=localStorage.getItem("currentUserName");
  }

  onSubmit() {
    this.errorVar = false;
    this.loginService.sendCredential(this.model).subscribe(
      data => {
                //console.log(JSON.parse(JSON.parse(JSON.stringify(data))._body).token);
                localStorage.setItem("token", JSON.parse(JSON.parse(JSON.stringify(data))._body).token);
                this.currentUserName=this.model.username;
                localStorage.setItem("currentUserName", this.model.username);
                this.model.username='';
                this.model.password='';
              },
      error => {console.log(error);alert("Error occured");}
    );

  }
}
