import { Injectable } from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact('Hermanni', 'Heiluja', '027503925', 'Hermannikatu 5', 'Hermannila'),
      new Contact('Joku', 'Randomi', '039487693', 'Randomkatu 13', 'Randomila'),
      new Contact('Ihme', 'Tyyppi', '390487423', 'Ihmetie 8', 'Ihmemaa')
    ];
  }

  public findContacts(): Contact[] {
    return this.contacts;
  }

}
