import React, { Component } from 'react';
import axios from 'axios';

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
    var url = 'http://127.0.0.1:5000/data/filter';
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
    var url = 'http://127.0.0.1:5000/data';
    axios.post(url)
    .then((res) => {
      console.log(res.data)
      this.setState({
        work: res.data,
      })
    })
  };


  getDetails(event){
    let currentId = event.currentTarget.id;
    this.props.history.push('/details')
  }

  componentDidMount(){
   this.getJobs()
  }

  render() {
    const dataMySQL = this.state.work.map((item, index)=>{
      return (
                  <div className="row card-work"  id={item.id} onClick={this.getDetails.bind(this)}>
                    <img className="card-img col-md-2" src={require(`../${item.img}`)}  alt="the_image"/>
                    <div className="card-block col-md-8">
                      <div className="card-title paddingClr">{item.title}</div>
                      <p className="card-text paddingClr">{item.description}</p><br/>
                      <div className="card-info ">{item.location} / {item.author} <span className="up_date">(posted {item.up_date} ago)</span></div>
                      <div className="card-info "><a>{item.categories}</a> <a>{item.skills}</a></div>
                    </div>
                    <div className="col-md-2 fee">
                      {item.fee} FCFA
                    </div>
                </div>
            );
    })
    return (
            <div className="container">
              <div className="col-md-12 ">
                <div className="row">
                  <div className="col-md-3 section-container">
                  <div className="form-group theShadow sidebar">
              <label> Filters </label>
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
                  </div>
                  <div className="form-group col-md-9 section-container">
                    <div className="col-md-12 theShadow">
                      <div><br/><h5>24 results</h5></div>
                        { dataMySQL }
                    </div>
                  </div>
                </div>
              </div>
            </div>

          );
  }
}

export default Work;
