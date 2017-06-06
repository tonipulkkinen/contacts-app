import {Component, OnInit, ViewChild} from '@angular/core';
import {MdSidenav} from "@angular/material";
import {NavigationEnd, Router} from "@angular/router";
import * as _ from 'lodash';
import {User} from "./user/user";
import {UserService} from "./user/services/user.service";
import {HttpService} from "./user/services/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{

  toolbarActive: boolean;
  user: User;

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private router: Router, private userService: UserService, private http: HttpService){
    router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login')) {
            this.toolbarActive = false;
            return;
          }
          this.toolbarActive = true;
          this.user = this.userService.findUser();
        }
      });
  }

  ngOnInit(): void {
  }

  logOut() {
    this.http.destroyToken();
    this.router.navigate(['/login']);
  }

}
