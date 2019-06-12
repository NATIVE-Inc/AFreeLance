import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {

  constructor(props) {
      super(props);
      this.state = {
        warning: '',
        email: '',
        password: '',
        first_name: '',
        last_name: ''
      }
    }


  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    var url = 'http://127.0.0.1:3210/oAuth/signup';
    axios.post(url, {
      first_name: this.state.first_name, 
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    })
    .then((res) => {
      {res.data? 
        this.props.history.push('/') 
        : 
        this.setState({
          warning: "Account not created",
        }) 
      }
    })
  };

  render() {
    return (
          <div className="container">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Sign Up</h1>
                <form ref="myForm" className="theForm" onSubmit={this.handleSubmit.bind(this)}> 
                    <div className="form-group">
                        <div class="row">
                          <div class="col">
                            <label name="first_name" for="exampleFormControlInput1">First name</label>
                            <input type="text" className="form-control"  onChange={this.handleChange.bind(this)}placeholder="John" required/>
                          </div>
                          <div className="col">
                            <label for="exampleFormControlInput1">Last name</label>
                            <input name="last_name" type="text" className="form-control"  onChange={this.handleChange.bind(this)}placeholder="Smith"/>
                          </div>
                        </div>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Email address</label>
                      <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={this.handleChange.bind(this)} required/>
                      <small className="text-muted">Your email will not be shared with any third party.</small>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Password</label>
                      <input name="password" type="password" className="form-control" id="exampleFormControlInput1"  onChange={this.handleChange.bind(this)} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <label className="warning" >{this.state.warning}</label>
                </form>
              </div>
          </div>
    );
  }
}

export default SignUp;
