import { Injectable } from '@angular/core';
import {UserApiService} from "./user-api.service";
import {UserStorageService} from "./user-storage.service";

@Injectable()
export class UserService {

  constructor(public httpService: UserApiService, public storageService: UserStorageService) { }

  public findUsers() {
    return this.httpService.findUsers();
  }

  public findUser(Username: string) {
    return this.httpService.findUserByUsername(Username);
  }

  public saveUserLocally(username: string) {
    return this.storageService.saveUser(username);
  }

  public loadUserLocally() {
    return this.storageService.loadUser();
  }
}
