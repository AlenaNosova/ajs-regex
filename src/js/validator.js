export default class Validator {
  constructor(user) {
    this.user = user;
  }

  validateUsername() {
    const re = /^[a-zA-Z][\w-]*[^_\W\d-]+$/.test(this.user) && !(/\d{4}/.test(this.user));

    if (re) {
      return true;
    }
    return false;
  }
}
