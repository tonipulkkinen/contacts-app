import {Component, OnInit} from '@angular/core';
import {ContactService} from "./contact/services/contact.service";
import {Contact} from "./contact/contact";
import {DialogService} from "./contact/services/dialog.service";
import {ContactStorageService} from "./contact/services/contact-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent implements OnInit{

  contacts: Contact[];

  constructor(public contactService: ContactService, public dialog: DialogService, public storage: ContactStorageService){
  }

  ngOnInit(): void {
    this.updateContacts();
  }

  updateContacts() {
    this.contacts = this.contactService.findContacts();
  }

  pressAddContact(): void {
    let input = this.dialog.contactDialog();
    input.subscribe(result => {
      if (result) {
        this.contactService.addNewContact((result));
        this.updateContacts();
      }
    });
  }
}
