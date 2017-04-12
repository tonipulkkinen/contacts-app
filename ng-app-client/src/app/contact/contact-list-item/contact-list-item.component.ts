import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Input() edit: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() map: EventEmitter<Contact>;

  constructor() { }

  editContact() {
    this.edit.emit(this.contact);
  }

  deleteContact() {
    this.remove.emit(this.contact);
  }

  showMapLocation() {
    this.map.emit(this.contact);
}

  ngOnInit() {
  }

}
