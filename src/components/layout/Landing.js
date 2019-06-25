import React, { Component } from 'react';

class Landing extends Component {


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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
