import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { createHashHistory } from 'history';
import Cookies from 'js-cookie';
export const history = createHashHistory()

class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        first_name: Cookies.get('first_name'),
        last_name: Cookies.get('last_name'),
        email: Cookies.get('email')
        }
    }

    logout(){
        Cookies.remove('first_name');
        Cookies.remove('last_name');
        Cookies.remove('email');
        history.push('/')
        this.forceUpdate();
      }

  render() {
      const user = Cookies.get('first_name')
      if (user === undefined){
        return (
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
                    How it works
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                    Log in
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                    Sign up
                    </NavLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        );
        } else {
            return (
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
                        <NavLink className="nav-link" to="/hotitworks">
                          How it works
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to="/work">
                          Work
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/postjob">
                          Post a Job
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <form className="search-container">
                            <input type="text" id="search-bar" placeholder="Search Jobs?"/>
                        </form>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link btn btn-primary" onClick={this.logout.bind(this)}>
                          {this.state.last_name}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            );
        }
        
  }
}


export default Navbar;
