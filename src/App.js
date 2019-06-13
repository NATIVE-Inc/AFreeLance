import React, { Component } from 'react';
import {
  Route, 
  NavLink,
  HashRouter
} from 'react-router-dom';
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
      <div className="Skill">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <NavLink className="navbar-brand" exact to="/">
            SkillFindr
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/work">
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-primary" to="/postjob">
                  Post a Job
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
