export class User {

  _firstName: string;
  _lastName: string;
  _username: string;
  _password: string;

  constructor(firstName?: string, lastName?: string, username?: string, password?: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._username = username;
    this._password = password;
  }
}
