import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Work from './components/layout/Work';
import Login from './components/layout/Login';
import SignUp from './components/layout/SignUp';
import PostJob from './components/layout/PostJob';
import Details from './components/layout/details';


import './App.css';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// the native page imports



class App extends Component {
  render() {
    return (
    <HashRouter>
      <div className="main-container">
        <Navbar/>
        <Route exact path="/" component={Landing}/>
        <Route path="/work" component={Work}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/postjob" component={PostJob}/>
        <Route path="/details" component={Details}/>
        <Footer />
      </div>
    </HashRouter>
    );
  }
}


export default App;
