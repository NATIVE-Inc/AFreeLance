import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';


import "react-datepicker/dist/react-datepicker.css";

class PostJob extends Component {
  constructor(props) {
      super(props);
      this.state = {
        startDate: new Date(),
        skillList: [],
        author: '',
        location: '',
        result: []
      };
      this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(date) {
      this.setState({
        startDate: date
      });
    }

  skillSet(event) {
    let currentColor = event.target.attributes['data-color'].value;
    let newColor = currentColor === "#FFF" ? "#ACCEEC" : "#FFF";
    event.target.style.backgroundColor = newColor;
    event.target.style.transition = '0.2s ease-in-out';
    event.target.style.border = '1px solid white';
    event.target.setAttribute('data-color', newColor);

  } 

  addJob(){
    var url = 'http://127.0.0.1:3210/addJob';
    axios.post(url, {
      title: this.title.value, 
      descr: this.descr.value,
      deadline: this.deadline.value, 
      amount: this.amount.value,
      skills: this.state.skillList,
      author: this.state.author,
      location: this.state.location,
      category: this.category.value
    })
    .then((res) => {
      console.log(res.data);
      this.setState({
        result: res.data,
      }) 
    })
  };

  componentDidMount() {
    if(reactLocalStorage.get('login') === "false"){
      this.props.history.push('/login')
    }
    else{
      console.log("crazy")

    }
  }

  render() {
    return (
          <div className="container">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Post A Job</h1>
                <form className="theForm" onSubmit={this.addJob.bind(this)}>
                  <fieldset className="form-group">
                    <label>Title</label>
                    <input type="text" ref={ title => this.title = title } className="form-control" placeholder="Title" required />
                    <small className="text-muted">This is some help text.</small>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" rows="3" placeholder="Enter a decription of your job" ref={ descr => this.descr = descr }></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <label>Deadline</label>
                          <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChange}
                              ref={ deadline => this.deadline = deadline }
                          />
                        </div>
                        <div className="col">
                          <label>Amount</label>
                          <div className="input-group mb-3">
                            <input type="text" ref={ amount => this.amount = amount } className="form-control" placeholder="Amount to pay" aria-label="Amount to pay" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                              <span className="input-group-text" id="basic-addon2">FCFA</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Skills</label>
                    <div className="skillset">
                      <button className="btn btn-default skills-bt" data-color="#FFF" onClick={(e) => {this.skillSet(e)}}>Programming</button>
                      <button className="btn btn-default skills-bt" data-color="#FFF" onClick={(e) => {this.skillSet(e)}}>Programg</button>
                      <button className="btn btn-default skills-bt" data-color="#FFF" onClick={(e) => {this.skillSet(e)}}>Programming</button>
                      <button className="btn btn-default skills-bt" data-color="#FFF" onClick={(e) => {this.skillSet(e)}}>Programg</button>
                      <button className="btn btn-default skills-bt" data-color="#FFF" onClick={(e) => {this.skillSet(e)}}>Prming</button>
                    </div>
                  </fieldset>
                  <button type="submit" className="btn btn-primary" >Post</button>
                </form>
                <label>{ this.state.skillList}</label>
              </div>
          </div>
    );
  }
}

export default PostJob;
