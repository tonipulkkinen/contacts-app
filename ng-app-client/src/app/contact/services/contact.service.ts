import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { ContactStorageService } from './contact-storage.service';
import { ContactApiService } from './contact-api.service';
import * as _ from 'lodash';

@Injectable()
export class ContactService {

  constructor(public storageService: ContactStorageService, public contactApiService: ContactApiService) {
  }

  public findContacts() {
    //return this.storageService.loadContacts();

    return this.contactApiService.findContacts();
  }

  public addNewContact(contact: Contact) {
    /*let contacts = this.storageService.loadContacts();
    contacts.push(contact);
    this.storageService.saveContacts(contacts);*/

    return this.contactApiService.saveContact(contact);
  }

  public newEdit(contact: Contact) {
    /*let contacts = this.storageService.loadContacts();
    let newEditsId = _.findIndex(contacts, ['id', contact.id]);
    contacts.splice(newEditsId, 1, contact);
    this.storageService.saveContacts(contacts);*/

    return this.contactApiService.saveContact(contact);
  }

  public newDelete(id: string) {
    /*let contacts = this.storageService.loadContacts();
    let removeId = _.findIndex(contacts, ['id'], id);
    contacts.splice(removeId, 1);
    this.storageService.saveContacts(contacts);*/

    return this.contactApiService.deleteContact(id);
  }
}
