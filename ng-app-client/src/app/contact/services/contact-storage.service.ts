import { Injectable } from '@angular/core';
import * as _ from "lodash";

@Injectable()
export class ContactStorageService {

  private contactsStorageKey = 'ca-contacts';

  constructor() {
    if(localStorage.getItem(this.contactsStorageKey) === null){
      localStorage.setItem(this.contactsStorageKey, JSON.stringify([]));
    }
  }

  public loadContacts() {
    return this.getLocalStorageData();
  }

  public saveContacts(contacts) {
    this.setLocalStorageData(contacts);
  }

  private getLocalStorageData() {
    let data = localStorage.getItem(this.contactsStorageKey);
    return JSON.parse(data);
  }

  private setLocalStorageData(givenData) {
    let contacts = JSON.stringify(givenData);
    localStorage.setItem(this.contactsStorageKey, contacts);
  }
}
