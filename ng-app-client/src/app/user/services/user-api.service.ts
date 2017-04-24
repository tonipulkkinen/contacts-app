import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../user";

@Injectable()
export class UserApiService {

  url = 'http://localhost:54731/api/login';

  constructor(private http: Http) { }

  findUsers() {
    return this.http.get(this.url).map(response => response.json() as User[]);
  }

  findUserByUsername(Username) {
    return this.http.get(this.url + '/' + Username).map(response => response.json() as User);
  }

}
