import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Work extends Component {
  constructor() {
    super();
    this.state = {
      workInfo: { skillList: Array, _id: String, title: String, descr: String, amount: String },

      author_Info: {   id: Number,
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        location: String,
        userSkills: Array,
      },
      };
  }

  render() {
    return (
        <div className="container">
              <p>Welcome to the backend</p>
        </div>

      );
    }
}

const mapStateToProps = (state) => {
  return {
    theState: state
  }
}

export default connect(mapStateToProps)(Work);
