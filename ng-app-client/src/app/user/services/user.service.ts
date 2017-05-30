import { Injectable } from '@angular/core';
import {UserApiService} from "./user-api.service";
import {User} from "../user";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class UserService {

  private user: User;

  constructor(private userApiService: UserApiService, private authenticationService: AuthenticationService) { }

  login(userName: string, password: string) {
    if (environment.endPointUrl) {
      return this.authenticationService.authenticate(userName, password).flatMap(() =>  {
        return this.userApiService.login();
      });
    }
    else {
      return Observable.of(null);
    }
  }

  saveUser(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  findUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
