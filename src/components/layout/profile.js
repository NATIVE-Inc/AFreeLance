import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      freelancer: {   id: Number,
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        location: String,
        userSkills: Array,
      },
      };
  }

  componentDidMount() {

    // get the job id and pass it to function to fetch database
    var jobId = this.props.theState.profileId;
    var url = 'http://127.0.0.1:5000/api/freelancer/id';
    axios.post(url, {
      id: jobId,
    })
      .then((res) => {
      var freeData = res.data;
      this.setState({
        freelancer: freeData[0],
      });
    })
  }

  render() {
    return (
        <div className="container">
              <div className="col-md-12 textcenter">
                <div className="row" key={this.state.freelancer.id}>
                  <div className="details-title">
                    <h3>{this.state.freelancer.email}</h3>
                  </div>
                </div>
                <div className="row" >
                  <div className="form-group col-md-8 section-container">
                    <div className="col-md-12 theShadow details-card">
                      <h4>Project Details</h4><hr/>
                      <p className="details-description">{this.state.freelancer.first_name}</p><br/><br/>
                      <h5><b>Skills required</b></h5>
                      <p className="btn btn-outline-secondary btn-sm">{this.state.freelancer.last_name}</p><br/>
                    </div>
                    <div className="col-md-12 theShadow details-card">
                      <h4>Submit Proposal</h4><hr/>
                      <h5>Describe your proposal</h5>
                      <textarea placeholder="Why are you the right choice for this job?" rows="8"></textarea>
                      <button className="btn btn-primary">Apply</button>
                    </div>
                  </div>
                  <div className="col-md-4 form-group section-container">
                    <div className="col-md-12 theShadow details-card">
                      <h4>Settings</h4><hr/>
                      <p className="details-item"> {this.state.freelancer.first_name +" " + this.state.freelancer.last_name }</p>
                      <p className="glyphicon glyphicon-map-marker details-item"> {this.state.freelancer.email}</p>
                      <p className="details-item"> {this.state.freelancer.skillList}</p>
                      <p className="details-item"> Balance: 0.00FCFA</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>

      );
    }
}

const mapStateToProps = (state) => {
  return {
    theState: state
  }
}

export default connect(mapStateToProps)(Profile);
