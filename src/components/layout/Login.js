import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

class Login extends Component {

 constructor(props) {
      super(props);
      this.state = {
        warning: '',
        email: '',
        password: ''
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
    var url = 'http://127.0.0.1:3210/oAuth/login';
    axios.post(url, {
      email: this.state.email,
      password: this.state.password
    })
    .then((res) => {
      if(res.data){
        Cookies.set('first_name', res.data[0]["first_name"]);
        Cookies.set('last_name', res.data[0]["last_name"]);
        Cookies.set('email', res.data[0]["email"]);
        this.props.history.push('/');
      }
      else{
        this.setState({
          warning: "Account not found",
        }) 
      }
    });
  };

  render() {
    return (
          <div className="container">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Sign In</h1>
                <form ref="myForm" className="theForm" onSubmit={this.handleSubmit.bind(this)}> 
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">Email address</label>
                      <input name='email' type="email" className="form-control" placeholder="name@example.com" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">Password</label>
                      <input name='password' type="password" className="form-control"  placeholder="password"  onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <label className="checkbox-inline">
                        <input type="checkbox" value="option1"/> Remember Me?
                      </label>
                    </div>
                    <label className="warning" >{this.state.warning}</label>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
              </div>
          </div>
    );
  }
}

export default Login;
