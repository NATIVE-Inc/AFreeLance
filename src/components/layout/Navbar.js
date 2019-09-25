import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { createHashHistory } from 'history';
import { connect } from 'react-redux';

export const history = createHashHistory()

class Navbar extends Component {

  logout = (e) => {
    this.props.dispatch({
      type: 'LOGOUT'
    })
    // return to homepage whenever user logs out
    history.push('/')
  }
  // route to profile page
  profile = (e) => {
    var data = e.currentTarget.id;
    this.props.dispatch({
      type: 'PROFILE_DETAIL',
      data
    })
    history.push('/profile')
  }

  render() {
      if (this.props.theState.isAuthenticated){
        return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <NavLink className="navbar-brand" exact to="/">
              AFreeLancer
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
                    <NavLink className="nav-link" to="/hire">
                      Hire
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/work">
                      Work
                    </NavLink>
                  </li>
                  
                  { this.props.theState.token.email === 'admin@afreelancer.com' ?
                        <li>
                          <NavLink className="nav-link" to="/backend">
                            Backend
                          </NavLink>
                        </li>
                      : 
                      console.log('not admin')
                  } 
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-primary " to="/postjob" >
                    Post a Job
                  </NavLink>
                </li>
                <li className="nav-item nav-info">
                  <img className="nav-info-img" alt="the_image" src={require('../images/blog/01.jpg')}/>
                    <div className="nav-info-details">
                    <span ref='username' id={this.props.theState.token._id} onClick={this.profile}><b>{this.props.theState.token.first_name} {this.props.theState.token.last_name}</b></span><br/>
                    <span className="bal" onClick={this.logout}>0.00 FCFA</span>
                  </div>
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
            AFreeLancer
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
        }

  }
}
const mapStateToProps = (state) => {
  return {
    theState: state
  }
}

export default connect(mapStateToProps)(Navbar);
