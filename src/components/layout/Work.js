import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

class Work extends Component {
  constructor() {
      super();
      this.state = {
        work: [],
      };
  }

  klikGet(){
    var url = 'http://127.0.0.1:3210/data';
    axios.post(url, {
      location: "hello",
      categories: "world"
    })
    .then((ambilData) => {
      console.log(ambilData.data);
      this.setState({
        work: ambilData.data,
      }) 
    })
  };

  getDetails(event){
    let currentId = event.currentTarget.id;
    Cookies.set('workId', currentId)
    this.props.history.push('/details')
  }

  componentDidMount(){
   this.klikGet()
  }

  render() {
    const dataMySQL = this.state.work.map((item, index)=>{
      return (
                <div className="card" id={item.id} onClick={this.getDetails.bind(this)}>
                  <img className="card-img-top img-fluid" src={require(`../${item.img}`)}  alt="the_image"/>
                  <div className="card-block">
                    <h4 className="card-title paddingClr">{item.title}</h4>
                    <p className="card-text paddingClr">{item.description}</p>
                  </div>
                </div>
            );
    })
    return (
            <div className="container">
              <label> Filters </label>
              <div className="col-md-12 text-center">
                <div className="row">
                  <div className="form-group col-md-2">
                    <fieldset class="form-group">
                      <select class="form-control">
                        <option selected>Category</option>
                        <option>two</option>
                        <option>three</option>
                        <option>four</option>
                        <option>five</option>
                      </select>
                    </fieldset>
                    <fieldset class="form-group">
                      <select class="form-control">
                        <option selected> Area </option>
                        <option>two</option>
                        <option>three</option>
                        <option>four</option>
                        <option>five</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="form-group col-sm-6 col-md-10">
                      { dataMySQL }
                  </div>
                </div>
              </div>
            </div>

          );
  }
}

export default Work;
