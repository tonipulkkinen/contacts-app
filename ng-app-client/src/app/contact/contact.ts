export class Contact {
  private _firstName: string;
  private _lastName: string;
  private _phone: string;
  private _streetAddress: string;
  private _city: string;
  private _address: string;

  constructor(firstName: string, lastName: string, phone: string, streetAddress: string, city: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._phone = phone;
    this._streetAddress = streetAddress;
    this._city = city;
    this._address = streetAddress + ', ' + city;
  }

  get firstName(): string {
    return this._firstName;
  }
  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }
  set lastName(value: string) {
    this._lastName = value;
  }

  get phone(): string {
    return this._phone;
  }
  set phone(value: string) {
    this._phone = value;
  }

  get streetAddress(): string {
    return this._streetAddress;
  }
  set streetAddress(value: string) {
    this._streetAddress = value;
  }

  get city(): string {
    return this._city;
  }
  set city(value: string) {
    this._city = value;
  }

  get address(): string {
    return this._address;
  }
  set address(value: string) {
    this._address = value;
  }
}
