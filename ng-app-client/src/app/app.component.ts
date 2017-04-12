import {Component, OnInit} from '@angular/core';
import {ContactService} from "./contact/services/contact.service";
import {Contact} from "./contact/contact";
import {DialogService} from "./contact/services/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent implements OnInit{

  contacts: Contact[];

  constructor(public contactService: ContactService, public dialog: DialogService){
  }

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
