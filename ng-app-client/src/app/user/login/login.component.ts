import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {User} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  errorMessage: string = "";

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = new User;
  }

  login() {
    /*this.errorMessage = '';
    this.userService.findUser(this.user.username).subscribe(result => {
      if(!result) {
        this.errorMessage = "Username does not exist";
      }
      else if(result.password == this.user.password) {
        this.user = result;
        this.router.navigate(['contacts']);
      }
      else {
        this.errorMessage = "Invalid username and password combination";
      }
    });*/
    this.router.navigate(['contacts']);
  }
}
