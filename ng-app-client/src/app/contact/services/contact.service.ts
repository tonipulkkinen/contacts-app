import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {ContactStorageService} from "./contact-storage.service";
import * as _ from "lodash";

@Injectable()
export class ContactService {

  constructor(public storageService: ContactStorageService) {
  }

  public findContacts() {
    let contacts = this.storageService.loadContacts();
    /*
    contacts.push(new Contact('Hermanni', 'Heiluja', '28935728935', 'Hermannikatu 5', 'Hermannila'));
    */
    return contacts;
  }

  public addNewContact(contact: Contact): void {
    let contacts = this.storageService.loadContacts();
    contacts.push(contact);
    this.storageService.saveContacts(contacts);
  }

}
