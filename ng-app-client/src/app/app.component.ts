import { Component } from '@angular/core';
import {ContactService} from "./contact/services/contact.service";
import {Contact} from "./contact/contact";
import {DialogService} from "./contact/services/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contacts: Contact[];

  constructor(contactService: ContactService, public dialog: DialogService) {
    this.contacts = contactService.findContacts();
  }

  pressAddContact() {
    this.dialog.contactDialog();
  }
}
