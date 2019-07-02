import React, { Component } from 'react';
import axios from 'axios';

class Work extends Component {
  constructor() {
      super();
      this.state = {
        workInfo: [],
      };
  }

  getDataId(Id){
    var url = 'http://127.0.0.1:3210/data/id';
    axios.post(url, {
      id: Id,
    })
    .then((res) => {
      console.log(res.data)
      this.setState({
        workInfo: res.data,
      })
    })
  };


  render() {
    const workInfo = this.state.workInfo.map((item, index)=>{
      return (

        <div className="col-md-12 textcenter">
          <div className="row" id={item.id}>
            <div className="details-title">
              <h3>{item.title}</h3>
            </div>
          </div>
          <div className="row" id={item.id}>
            <div className="form-group col-md-8 section-container">
              <div className="col-md-12 theShadow details-card">
                <h4>Project Details</h4><hr/>
                <p className="details-description">{item.description}</p><br/><br/>
                <h5><b>Skills required</b></h5>
                <p className="btn btn-outline-secondary btn-sm">{item.skills}</p><br/>
              </div>
              <div className="col-md-12 theShadow details-card">
                <h4>Submit Proposal</h4><hr/>
                <h5>Describe your proposal</h5>
                <textarea placeholder="Why are you the right choice for this job?" rows="8"></textarea>
                <button className="btn btn-primary" id={item.id}>Apply</button>
              </div>
            </div>
            <div className="col-md-4 form-group section-container">
              <div className="col-md-12 theShadow details-card">
                <h4>About Employer</h4><hr/>
                <p className="details-item"> {item.author}</p>
                <p className="glyphicon glyphicon-map-marker details-item"> {item.location}</p>
                <p className="details-item"> {item.skills}</p>
                <p className="details-item"> {item.up_date}</p>
              </div>
            </div>
          </div>
        </div>
      );
    })
    return (
            <div className="container">
                  { workInfo }
            </div>

          );
  }
}

export default Work;
