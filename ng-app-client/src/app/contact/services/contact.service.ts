import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {ContactStorageService} from "./contact-storage.service";
import * as _ from "lodash";

@Injectable()
export class ContactService {

  constructor(public storageService: ContactStorageService) {
  }

  public findContacts() {
    return this.storageService.loadContacts();
  }

  public addNewContact(contact: Contact): void {
    let contacts = this.storageService.loadContacts();
    contacts.push(contact);
    this.storageService.saveContacts(contacts);
  }

  public newEdit(contact: Contact): void {
    let contacts = this.storageService.loadContacts();
    let newEditsId = _.findIndex(contacts, ['id', contact._id]);
    contacts.splice(newEditsId, 1, contact);
    this.storageService.saveContacts(contacts);
  }

  public newDelete(id: string): void {
    let contacts = this.storageService.loadContacts();
    let removeId = _.findIndex(contacts, ['id'], id);
    contacts.splice(removeId, 1);
    this.storageService.saveContacts(contacts);
  }
}
