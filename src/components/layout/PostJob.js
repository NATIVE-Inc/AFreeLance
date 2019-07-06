import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import "react-datepicker/dist/react-datepicker.css";
let skillList1 =  [];

class PostJob extends Component {
    constructor(props) {
      super(props);
      this.state = {
        skills: ['prog', 'gram'],
      }
    }

    handleChange(e){
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value
      })
    }

  skillSet(event) {
    event.preventDefault()
    let currentColor = event.target.attributes['data-color'].value;
    let newColor = currentColor === "#FFF" ? "#ACCEEC" : "#FFF";
    event.target.style.backgroundColor = newColor;
    event.target.style.transition = '0.2s ease-in-out';
    event.target.style.border = '1px solid white';
    event.target.setAttribute('data-color', newColor);

    let thevalue = event.target.name;
    var i = skillList1.indexOf(thevalue)
    if (i === -1)
      skillList1.push(thevalue);
    else
      skillList1.splice(i,1)

    this.setState({ skillList: skillList1 })

  }

  addJob(e){
    e.preventDefault()

    // get the users infromation
    const token = this.props.theState.token;
    var url = 'http://127.0.0.1:5000/api/addJob';
    axios.post(url, {
      title: this.refs.title.value,
      descr: this.refs.descr.value,
      deadline: this.state.deadline,
      amount: this.refs.amount.value,
      skillList: this.state.skillList,
      author: token.first_name + " " + token.last_name,
      author_Id: token._id,
      location: token.location,
      category: this.refs.category.value
    })
    .then((res) => {
      if (res.status === 200) {
        this.props.history.push('/work')
      }
    })
  };
  render() {
    const skillset = this.state.skills.map((item, index) =>{
      return(
        <button className="btn btn-default skills-bt" name={item} data-color="#FFF" onClick={(e) => {this.skillSet(e)}}>{item}</button>
      );
    })
    return (
          <div className="container">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Post A Job</h1>
                <form className="theForm" onSubmit={this.addJob.bind(this)}>
                  <fieldset className="form-group">
                    <label>Title</label>
                    <input type="text" ref="title" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Title" required />
                    <small className="text-muted">This is some help text.</small>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" rows="3" placeholder="Enter a decription of your job" ref="descr" onChange={this.handleChange.bind(this)}></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <label>Category</label>
                          <select className="col browser-default custom-select" ref="category" onChange={this.handleChange.bind(this)}>
                            <option value='uncategorized'>Category</option>
                            <option>Agriculture</option>
                            <option>Information Technology</option>
                            <option>Real Estate</option>
                          </select>
                        </div>
                        <div className="col">
                          <label>Amount</label>
                          <div className="input-group mb-3">
                            <input type="text" ref="amount"  onChange={this.handleChange.bind(this)} className="form-control" placeholder="Amount to pay" aria-label="Amount to pay" aria-describedby="basic-addon2"/>
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
                      {skillset}
                    </div>
                  </fieldset>
                  <fieldset>
                  <button type="submit" className="btn btn-primary floatRight" >Post</button>
                  </fieldset>
                </form>
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

export default connect(mapStateToProps)(PostJob);
