import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MdButtonModule, MdDialogModule, MdCoreModule, MdCardModule, MdInputModule, MdIconModule} from '@angular/material'

import { AppComponent } from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import { MapDialogComponent } from './contact/map-dialog/map-dialog.component'

import {ContactService} from "./contact/services/contact.service";
import {DialogService} from "./contact/services/dialog.service";
import {ContactStorageService} from "./contact/services/contact-storage.service";


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
    MdCoreModule,
    MdCardModule,
    MdInputModule,
    MdIconModule
  ],
  entryComponents: [ContactDialogComponent, MapDialogComponent],
  providers: [ContactService, DialogService, ContactStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
