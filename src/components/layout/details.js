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
      console.log(res.data)
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
        <div className="row" id={item.id}>
          <img className="col-md-4 details-img" src={require(`../${item.img}`)}  alt="the_image"/>
          <div className="col-md-8 details-info">
            <h4 className="details-title">{item.title}</h4>
            <p className="details-description">{item.description}</p>
            <p>author =>{item.author}</p>
            <p>location =>{item.location}</p>
            <p>skills =>{item.skills}</p>
            <p>up_date =>{item.up_date}</p>
            <button className="btn btn-primary floatRight" id={item.id}>Apply</button>
          </div>
      </div>
      );
    })
    return (
            <div className="container">
              <div className="col-md-12 textcenter">
                  { workInfo }
              </div>
            </div>

          );
  }
}

export default Work;
