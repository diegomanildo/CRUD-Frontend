class User {
  static idCounter = 0;

  constructor(name, lastName, email) {
    this.id = User.idCounter++;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
  }
}

export default User;