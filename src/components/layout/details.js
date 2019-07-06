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

  componentDidMount() {

    // get the job id and pass it to function to fetch database
    var jobId = this.props.theState.jobDetail;

    var url = 'http://127.0.0.1:5000/api/data/id';
    axios.post(url, {
      id: jobId,
    })
    .then((res) => {
      var jobData = res.data;
      this.setState({
        workInfo: jobData,
        author_Info: jobData.author_Info // information about author is stored here
      });
    })
  }

  render() {
    return (
        <div className="container">
              <div className="col-md-12 textcenter">
                <div className="row" key={this.state.workInfo._id}>
                  <div className="details-title">
                    <h3>{this.state.workInfo.title}</h3>
                  </div>
                </div>
                <div className="row" >
                  <div className="form-group col-md-8 section-container">
                    <div className="col-md-12 theShadow details-card">
                      <h4>Project Details</h4><hr/>
                      <p className="details-description">{this.state.workInfo.descr}</p><br/><br/>
                      <h5><b>Skills required</b></h5>
                      <p className="btn btn-outline-secondary btn-sm">{this.state.workInfo.skillList}</p><br/>
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
                      <h4>About Employer</h4><hr/>
                      <p className="details-item"> {this.state.author_Info.first_name +" " + this.state.author_Info.last_name }</p>
                      <p className="glyphicon glyphicon-map-marker details-item"> {this.state.author_Info.email}</p>
                      <p className="details-item"> {this.state.workInfo.skillList}</p>
                      <p className="details-item"> {this.state.workInfo.up_date}</p>
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

export default connect(mapStateToProps)(Work);
