import {Component, OnInit} from '@angular/core';
import {Contact} from "../contact";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  contact: Contact;
  dialogMode: string;
  saveMode: string;

  constructor(public dialog: MdDialogRef<ContactDialogComponent>){
  }

  save() {
    this.dialog.close(this.contact);
  }

  cancel() {
    this.dialog.close();
  }

  ngOnInit() {
    this.dialogMode = 'Edit';
    this.saveMode = 'Save';
    if (!this.contact) {
      this.contact = new Contact();
      this.dialogMode = 'New';
      this.saveMode = 'Add';
    }
  }
}
