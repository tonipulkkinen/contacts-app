import {Component, OnInit, ViewChild} from '@angular/core';
import {MdSidenav} from "@angular/material";
import {NavigationEnd, Router} from "@angular/router";
import * as _ from 'lodash';
import {User} from "./user/user";
import {UserService} from "./user/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{

  toolbarActive: boolean;
  loggedIn: User = new User;

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private router: Router, public userService: UserService){
  }

  ngOnInit(): void {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login')) {
            this.toolbarActive = false;
            return;
          }
          this.toolbarActive = true;
        }
      });
  }

  updateUser() {
    let user = this.userService.loadUserLocally();
    this.userService.findUser(user).subscribe(result => {
      this.loggedIn = result;
    });
  }
}
