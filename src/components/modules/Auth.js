const localStorage = require('localStorage');

class Auth {
    /*
    *   Authenticate a user. Save a token dictionary in local storage
    *   @param {dict} token
    */
   static authenticateUser(token) {
       localStorage.setItem('token', token);
    }
    /*
    *   isUserAuthenticated a user. 
    */
   static isUserAuthenticated() {
        return localStorage.getItem('token')
    }
    /*
    *   deAuthenticateUser a user. 
    */
    static deAuthenticateUser() {
        localStorage.removeItem('token');
    }
    /*
    *   getToken a user. 
    */
    static getToken() {
        return JSON.parse(localStorage.getItem('token'));
    }
}

export default Auth;