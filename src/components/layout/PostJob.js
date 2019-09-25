import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker'

let skillList1 =  [];

class PostJob extends Component {

    /* list of all input fields
        Title 
        description 
        category 
        Town 
        amount
        skills 
        deadline (to do)
        
        -------------------to be gotten from credentials 
        author
        author_Id
        location
    */
    constructor(props) {
      super(props);
      this.state = {
        skills: ['prog', 'gram'],
      }
    }

  /* 
    name: handleChange
    descr: update values of input fields in the state onchange
  */

  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }


  /* 
    name: skillSet
    descr: update value of skills selected in the state 
  */
  skillSet(event) {
    event.preventDefault()
    
    
    {/* makes the button active and changes theme
        toggles the class active
    */}
    let theCurrentClass = event.target.className;
    var j = theCurrentClass.indexOf('active')
    if( j === -1)
      event.target.className += ' active';
    else 
      event.target.className = 'btn btn-outline-primary skills-btn';


    {/* adding the skill to the list of skills in the sttate
        checks first to confrim the presence of the skill in thelist
    */}
    let thevalue = event.target.name;
    var i = skillList1.indexOf(thevalue)
    if (i === -1)
      skillList1.push(thevalue);
    else
      skillList1.splice(i,1)

    this.setState({ skillList: skillList1 })

  }


  /* 
    name: addJob
    descr: post details of job in database 
  */
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
        <button className="btn btn-outline-primary skills-btn" name={item} data-color="#FFF" onClick={(e) => {this.skillSet(e)}}>{item}</button>
      );
    })
    return (
          <div className="container">
              <div className="col-md-12">
                <h4 className="mb-3">AFreeLancer</h4>
                <h1 className="mb-0">Tell us what you need done</h1>
                <p > Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work. </p>
                <br/>
                <form className="theForm" onSubmit={this.addJob.bind(this)}>
                  <fieldset className="form-group">
                    <h4 className="display-6"> Project Name</h4>
                    <input type="text" ref="title" onChange={this.handleChange.bind(this)} className="form-control" placeholder="e.g Build me a Website" required />
                  </fieldset>
                  <fieldset className="form-group">
                    <h4  className="display-6">Tell us more about your project</h4>
                    <small> Start with a bit about yourself or your business, and include an overview of what you need done. </small>
                    <textarea className="form-control" rows="7" placeholder="Describe your project here" ref="descr" onChange={this.handleChange.bind(this)}></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <h4 className="display-6">Category</h4>

                          {/* ToDo: list of categories generated from database */}
                          <select className="col browser-default custom-select" ref="category" onChange={this.handleChange.bind(this)}>
                            <option value='uncategorized' disabledselected>Select Category</option>
                            <option>Agriculture</option>
                            <option>Information Technology</option>
                            <option>Real Estate</option>
                          </select>
                        </div>

                        <div className="col">
                          <h4 className="display-6">Town</h4>

                          {/* ToDo: list of towns generated from database */}
                          <select className="col browser-default custom-select" ref="town" onChange={this.handleChange.bind(this)}>
                            <option value='uncategorized' selected>Select Town</option>
                            <option>Yaounde</option>
                            <option>Douala</option>
                            <option>Buea</option>
                          </select>
                        </div>

                        <div className="col">
                          <h4 className="display-6">Amount</h4>
                          <div className="input-group mb-3">
                            <input type="text" ref="amount"  onChange={this.handleChange.bind(this)} className="form-control" placeholder="0.00" type="number" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                              <span className="input-group-text" id="basic-addon2">FCFA</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-group">
                    <h4 className="display-6">Skills</h4>
                    <small> Which skills are you looking for? </small>
                    <div className="skillset">
                      {skillset}
                    </div>
                  </fieldset><br/>
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
