import React, { Component } from 'react';
import {
  Route,
  HashRouter,
  Redirect,

} from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Profile from './components/layout/Profile';
import Work from './components/layout/Work';
import Hire from './components/layout/Hire';
import Login from './components/layout/Login';
import SignUp from './components/layout/SignUp';

import PostJob from './components/layout/PostJob';
import Details from './components/layout/details';
import Backend from './components/layout/backend';


import './App.css';
 
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// the native page imports

// these are private routes which are only accesible when the user sign in
const PrivateRoute = ({ component: Component, ...rest, isAuthenticated }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated ?
      <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

// these are private routes which are only accesible by the administrator
const AdminRoute = ({ component: Component, ...rest, token }) => (
  <Route {...rest} render={(props) => (
    token.email === 'admin@afreelancer.com' ?
      <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
  )} />
)


class App extends Component {
  render() {
    const isAuth = this.props.theState.isAuthenticated;
    const token  = this.props.theState.token;
    return (
    <HashRouter>
        <div className="main-container">
          {console.log}
        <Navbar/>
        <Route exact path="/" component={Landing}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/hire" component={Hire}/>
        <Route path="/profile" component={Profile}/>
        <PrivateRoute path="/work" component={Work} isAuthenticated={isAuth} />

        <Route path="/postjob" component={PostJob}/>
        {/*  
        <PrivateRoute path="/postjob" component={PostJob} isAuthenticated={isAuth} />
        */}
        <PrivateRoute path="/details" component={Details} isAuthenticated={isAuth} />
        
        <AdminRoute path="/backend" component={Backend} token={token} />
        <Footer />
      </div>
    </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theState: state
  }
}

export default connect(mapStateToProps)(App);
