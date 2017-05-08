import { ContactAddressPipe } from './contact-address.pipe';
import {Contact} from "../contact";

describe('ContactAddressPipe', () => {

  const pipe = new ContactAddressPipe();

  it('it should return streetAddress and city', () => {
    let contact = new Contact('firstname', 'lastname', '4633463', 'streetAddress 1', 'city 1', '1');

    expect(pipe.transform(contact)).toBe(contact.streetAddress + ', ' + contact.city);
  });

  it('it should return streetAddress', () => {
    let contact = new Contact('firstname', 'lastname', '4633463', 'streetAddress 1', '', '1');

    expect(pipe.transform(contact)).toBe(contact.streetAddress);
  });

  it('it should return city', () => {
    let contact = new Contact('firstname', 'lastname', '4633463', '', 'city 1', '1');

    expect(pipe.transform(contact)).toBe(contact.city);
  });

  it('it should return empty string', () => {
    let contact = new Contact('firstname', 'lastname', '4633463', '', '', '1');

    expect(pipe.transform(contact)).toBe('');
  });
});
