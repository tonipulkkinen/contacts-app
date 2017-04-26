import { Injectable } from '@angular/core';

@Injectable()
export class UserStorageService {

  private userStorageKey = 'ca-user';

  constructor() {
    if (localStorage.getItem(this.userStorageKey) === null) {
      localStorage.setItem(this.userStorageKey, JSON.stringify(null));
    }
  }

  public loadUser() {
    return this.getLocalStorageData();
  }

  public saveUser(user) {
    this.setLocalStorageData(user);
  }

  private getLocalStorageData() {
    let data = localStorage.getItem(this.userStorageKey);
    return JSON.parse(data);
  }

  private setLocalStorageData(givenData) {
    let data = JSON.stringify(givenData);
    localStorage.setItem(this.userStorageKey, data);
  }
}
