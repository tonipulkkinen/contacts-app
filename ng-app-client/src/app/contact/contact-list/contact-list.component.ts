import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: [Contact];
  @Output() editContact: EventEmitter<Contact>;
  @Output() removeContact: EventEmitter<Contact>;
  @Output() showMap: EventEmitter<Contact>;

  constructor() {
    this.editContact = new EventEmitter();
    this.removeContact = new EventEmitter();
    this.showMap = new EventEmitter();
  }

  ngOnInit() {
  }

}
