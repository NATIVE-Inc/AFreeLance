import React, { Component } from 'react';
import axios from 'axios';

class Work extends Component {
  constructor(props) {
      super(props);
      this.state = {
        id: this.props.location.state.id,
        jobData: {}
      };
  }

  getDataId(){
    var url = 'http://127.0.0.1:3210/data/id';
    axios.post(url, {
      id: this.state.id,
    })
    .then((res) => {
      this.setState({
        jobData: res.data,
      }) 
      console.log(this.state.jobData.title)
    })
  };

  componentDidMount(){
    this.getDataId()
  }


  render() {
    return (
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  {this.state.jobData}
                </div>
              </div>
            </div>

          );
  }
}

export default Work;
