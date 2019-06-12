import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

class Landing extends Component {

  logout(){
    reactLocalStorage.set('login', false);
    reactLocalStorage.set('user', null);
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Experience is Everything</h1>
                <p className="lead">
                  {' '}
                  Hire experienced professionals, Find jobs based on your skills.
                </p>
                <hr />
                <a href="#/work" className="btn btn-lg btn-info mr-2">
                  Work
                </a>
                <a href="#/hire" className="btn btn-lg btn-light">
                  Hire
                </a>
              </div>
              <button onClick={this.logout.bind(this)} className="btn btn-primary">{reactLocalStorage.get('login')}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
