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

  contacts: Contact[];

  constructor(private contactService: ContactService, private dialog: DialogService) { }

  ngOnInit(): void {
    this.updateContacts();
  }

  updateContacts() {
    //this.contacts = this.contactService.findContacts();
    this.contactService.findContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  pressAddContact(): void {
    let buttonPressed = this.dialog.contactDialog();
    buttonPressed.subscribe(result => {
      if (result) {
        this.contactService.addNewContact(result).subscribe(allDone => {
          if (allDone) {
            this.updateContacts();
          }
        });
      }
    });
  }

  editContact(contact: Contact): void {
    let buttonPressed = this.dialog.contactDialog(contact);
    buttonPressed.subscribe(result => {
      if (result) {
        this.contactService.newEdit(result).subscribe(allDone => {
          if (allDone) {
            this.updateContacts();
          }
        });
      }
    });
  }

  deleteContact(contact: Contact): void {
    this.contactService.newDelete(contact.id).subscribe(allDone => {
      if (allDone) {
        this.updateContacts();
      }
    });
  }

  showOnMap(contact: Contact): void {
    this.dialog.mapDialog(contact);
  }

}
