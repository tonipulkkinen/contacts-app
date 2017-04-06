import { Component } from '@angular/core';
import {Contact} from './contact/contact'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact('Hermanni', 'Heiluja', '027503925', 'Hermannikatu 5', 'Hermannila'),
      new Contact('Joku', 'Randomi', '039487693', 'Randomkatu 13', 'Randomila'),
      new Contact('Ihme', 'Tyyppi', '390487423', 'Ihmetie 8', 'Ihmemaa')
    ]
  }
}
