export class Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  city: string;

  constructor(firstName?: string, lastName?: string, phone?: string, streetAddress?: string, city?: string, id?: string) {
    this.firstName = firstName ? firstName : '';
    this.lastName = lastName ? lastName : '';
    this.phone = phone ? phone : '';
    this.streetAddress = streetAddress ? streetAddress : '';
    this.city = city ? city: '';
  }
}
