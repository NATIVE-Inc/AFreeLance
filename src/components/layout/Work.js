import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

class Work extends Component {
  constructor() {
      super();
      this.state = {
        work: [],
        categories: 'uncategorized',
        location: 'uncategorized'
      };
  }
  
  filterJobs(){
    var url = 'http://127.0.0.1:3210/data/filter';
    axios.post(url, {
      location: this.refs.location.value,
      categories: this.refs.categories.value
    })
    .then((res) => {
      this.setState({
        work: res.data,
      }) 
    })
  };

  handleChange(e){
    const name = e.target.ref;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
    this.filterJobs()
  }

  getJobs(){
    var url = 'http://127.0.0.1:3210/data';
    axios.post(url)
    .then((res) => {
      this.setState({
        work: res.data,
      }) 
    })
  };


  getDetails(event){
    let currentId = event.currentTarget.id;
    Cookies.set('workId', currentId)
    this.props.history.push('/details')
  }

  componentDidMount(){
   this.getJobs()
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
                    <fieldset className="form-group">
                      <select className="form-control"  ref="categories" onChange={this.handleChange.bind(this)}>
                        <option value='uncategorized'>Category</option>
                        <option>Agriculture</option>
                        <option>Information Technology</option>
                        <option>Real Estate</option>
                      </select>
                    </fieldset>
                    <fieldset className="form-group">
                      <select className="form-control"  ref="location" onChange={this.handleChange.bind(this)}>
                        <option value='uncategorized'> Area </option>
                        <option>Yaounde</option>
                        <option>Douala</option>
                        <option>Buea</option>
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
