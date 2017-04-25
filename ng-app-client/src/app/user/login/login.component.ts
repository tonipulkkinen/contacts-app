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
  wrongUser: string = "";

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = new User;
  }

  login() {
    this.wrongUser = '';
    this.userService.findUser(this.user.username).subscribe(result => {
      if(!result) {
        this.wrongUser = "Username does not exist";
      }
      else if(result.password == this.user.password) {
        this.router.navigate(['contacts']);
      }
      else {
        this.wrongUser = "Invalid username and password combination";
      }
    });
  }

}
