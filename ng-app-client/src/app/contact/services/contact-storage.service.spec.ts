import { TestBed, inject } from '@angular/core/testing';
import * as _ from 'lodash';

import { ContactStorageService } from './contact-storage.service';
import {Contact} from "../contact";

describe('ContactStorageService', () => {

  let contactsStorageKey = 'ca-contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactStorageService]
    });
  });

  //LocalStorage mock
  beforeEach(() => {
    let storage = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return storage[key];
    });

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return storage[key] = value;
    });
  });

  function contactArray() {
    return [
      new Contact('first', 'contact', '2532352', 'street1', 'city1', '1'),
      new Contact('second', 'contact', '34734573', 'street2', 'city2', '2'),
      new Contact('third', 'contact', '223462146', 'street3', 'city3', '3')
    ];
  }

  it('should initialize local storage', inject([ContactStorageService], (service: ContactStorageService) => {
    let data = localStorage.getItem(contactsStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#loadContacts should return all contacts', inject([ContactStorageService], (service: ContactStorageService) => {
    let contacts = contactArray();
    service.saveContacts(contacts);
    let contactIds = _.map(contacts, 'id');
    service.loadContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, function(c){
        expect(contactIds).toContain(c.id);
      });
    });
  }));
});
