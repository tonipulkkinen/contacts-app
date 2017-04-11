export class Contact {
  _id: string;
  _firstName: string;
  _lastName: string;
  _phone: string;
  _streetAddress: string;
  _city: string;

  constructor(firstName?: string, lastName?: string, phone?: string, streetAddress?: string, city?: string, id?: string) {
    this._id = id ? id : Date.now().toString();
    this._firstName = firstName ? firstName : '';
    this._lastName = lastName ? lastName : '';
    this._phone = phone ? phone : '';
    this._streetAddress = streetAddress ? streetAddress : '';
    this._city = city ? city: '';
  }
}
