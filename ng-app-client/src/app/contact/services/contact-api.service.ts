import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";

@Injectable()
export class ContactApiService {

  url = environment.endPointUrl + '/contacts';

  constructor(private http: Http) { }

  findContacts() {
    return this.http.get(this.url).map(response => response.json() as Contact[]);
  }

  saveContact(contact: Contact) {
    return contact.id ? this.updateContact(contact) : this.createContact(contact);
  }

  createContact(contact: Contact) {
    return this.http.post(this.url, contact);
  }

  updateContact(contact: Contact) {
    return this.http.put(this.url + '/' + contact.id, contact);
  }

  deleteContact(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
}
