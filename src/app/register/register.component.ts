import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {RegisterServiceService} from '../register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser: User = new User();
  registered: boolean = false;
  errorVar: boolean = false;
  userExistsVar: boolean = false;

  constructor (private registerService: RegisterServiceService) {}

  onSubmit() {
    console.log("submit test");
    this.errorVar = false;
    this.userExistsVar = false;
    this.registerService.sendUser(this.newUser)
    .subscribe(
      data => {
        var status = JSON.parse(JSON.parse(JSON.stringify(data))._body);

        if(status == -2){
          alert("Email already exists");
        }else if(status == 1){
          this.registered = true;
          this.newUser = new User();
        }
      },
      error => {
        console.log(error);
        alert("Error occured");
      }
    );
  } 

}
