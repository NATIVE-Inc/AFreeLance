import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

class Auth extends Component {
  render() {
    return (

        <div className="sing_in">
          <Route exact path="/skillfindr/auth/login" component={Login}/>
          <Route path="/skillfindr/auth/signup" component={SignUp}/>
        </div>
    );
  }
}

export default Auth;
