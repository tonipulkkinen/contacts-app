import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  dialogRef;
  contact: Contact;

  constructor(dialogRef: MdDialogRef<ContactDialogComponent>){
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {
    if (!this.contact) {
      this.contact = new Contact();
    }
  }

  add() {
    this.dialogRef.close(this.contact);
  }

  cancel() {
    this.dialogRef.close();
  }
}
