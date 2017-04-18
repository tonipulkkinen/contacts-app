import { Component, OnInit } from '@angular/core';
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";
import {Contact} from "./contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact;

  constructor(public contactService: ContactService, public dialog: DialogService) { }

  ngOnInit(): void {
    this.updateContacts();
  }

  updateContacts() {
    this.contacts = this.contactService.findContacts();
  }

  pressAddContact(): void {
    let buttonPressed = this.dialog.contactDialog();
    buttonPressed.subscribe(result => {
      if (result) {
        this.contactService.addNewContact((result));
        this.updateContacts();
      }
    });
  }

  editContact(contact: Contact): void {
    let buttonPressed = this.dialog.contactDialog(contact);
    buttonPressed.subscribe(result => {
      if (result) {
        this.contactService.newEdit(result);
        this.updateContacts();
      }
    });
  }

  deleteContact(contact: Contact): void {
    this.contactService.newDelete(contact._id);
    this.updateContacts();
  }

  showOnMap(contact: Contact): void {
    this.dialog.mapDialog(contact);
  }

}
