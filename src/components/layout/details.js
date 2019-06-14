import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

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
      this.setState({
        workInfo: res.data,
      }) 
    })
  };

  componentDidMount(){
    var workId = Cookies.get('workId');
    this.getDataId(workId)
  }


  render() {
    const workInfo = this.state.workInfo.map((item, index)=>{
      return (
        <div className="col-md-12" id={item.id}>
          <img className="col-md-12" src={require(`../${item.img}`)}  alt="the_image"/>
          <div className="">
            <h4 className="">{item.title}</h4>
            <p className="">{item.description}</p>
          </div>
      </div>
      );
    })
    return (
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  { workInfo }
                </div>
              </div>
            </div>

          );
  }
}

export default Work;
