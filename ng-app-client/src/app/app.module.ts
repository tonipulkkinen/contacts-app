import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionBackend, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Router, RouterModule, Routes} from '@angular/router';
import { MdButtonModule, MdDialogModule, MdCoreModule, MdCardModule, MdInputModule, MdIconModule, MdSidenavModule, MdToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contact/contacts.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import { MapDialogComponent } from './contact/map-dialog/map-dialog.component';
import { LoginComponent } from './user/login/login.component';

import { ContactService } from './contact/services/contact.service';
import { DialogService } from './contact/services/dialog.service';
import { ContactStorageService } from './contact/services/contact-storage.service';
import { ContactApiService } from './contact/services/contact-api.service';
import { UserService } from './user/services/user.service';
import { UserApiService } from './user/services/user-api.service';
import { UserStorageService } from "./user/services/user-storage.service";
import { DeviceService } from "./contact/utils/device.service";
import { AuthenticationService } from "./user/services/authentication.service";
import { HttpService } from "./user/services/http.service";

import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import { VibrationDirective } from './contact/utils/vibration.directive';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'contacts', component: ContactsComponent}
];

export function getHttp(backend: XHRBackend, options: RequestOptions, router: Router) {
  return new HttpService(backend, options, router);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    ContactAddressPipe,
    ContactsComponent,
    LoginComponent,
    VibrationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MdButtonModule,
    MdDialogModule,
    MdCoreModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule
  ],
  entryComponents: [ContactDialogComponent, MapDialogComponent],
  providers: [
    ContactService,
    DialogService,
    ContactStorageService,
    ContactApiService,
    UserService,
    UserApiService,
    UserStorageService,
    DeviceService,
    AuthenticationService,
    HttpService,
    {
      provide: HttpService,
      useFactory: getHttp,
      deps: [XHRBackend, RequestOptions, Router]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
