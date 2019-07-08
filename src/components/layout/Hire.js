import React, { Component } from 'react';
import axios from 'axios';

class Hire extends Component {
  constructor() {
    super();
    this.state = {
        freeLancer: [],
      };
  }

  componentDidMount() {
    var url = 'http://127.0.0.1:5000/api/freelancer';
    axios.get(url)
    .then((res) => {
      this.setState({
        freeLancer: res.data,
      });
    })
  }

  render() {
    const FreeLancersg = this.state.freeLancer.map((item, index)=>{
        return (
            <div className="card paddingClr hire-card" key={item._id} id={item._id}>
                <img className="card-img"  src={require('../images/blog/01.jpg')}  alt="the_image"/>
                <div className="card-block col-md-8">
                <div className="card-title paddingClr">{item.first_name + " " + item.last_name}</div>
                <p className="card-text paddingClr">{item.email}</p><br/>
                <div className="card-info "><a>{item.skills}</a></div>
                </div>
            </div>
        );
      })
      return (

        <div className="container">
            <div className="row  col-md-12 ">
                    { FreeLancersg }
                </div>
            </div>

        );
    }
}

export default Hire;
