export class AuthService {
  logginIn = false;

  isAutheticate() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(
        resolve(this.logginIn)
        , 1200)
    });
    return promise
  }

  login() {
    this.logginIn = true;
  }
  logout() {
    this.logginIn = false;
  }
}
