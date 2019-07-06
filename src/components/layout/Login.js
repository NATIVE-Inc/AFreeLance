import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Login extends Component {
 constructor(props) {
      super(props);
      this.state = {
        warning: '',
        email: '',
        password: ''
      }
    }
  // used to update input fields in state
  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    var url = 'http://localhost:5000/api/login';
    axios.post(url, {
      email: this.state.email,
      password: this.state.password,
    })
    .then((res) => {
      if(res.data.first_name){
        // when user exist set isAuthenticate as true
        // add token to store
        const data = res.data;
        this.props.dispatch({
          type: 'LOGIN',
          data
        })
        // console.log(this.props.theState) // this displays the state from store
        this.props.history.push('/')

      } else {
        this.setState({
          warning: res.data,
        })
      }
    })
  };

  render() {
    if (!this.props.theState.isAuthenticated) {
      return (
        <div className="container">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Sign In</h1>
            <form ref="myForm" className="theForm" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input name='email' type="email" className="form-control" placeholder="name@example.com" value={this.state.email} onChange={this.handleChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Password</label>
                <input name='password' type="password" className="form-control" placeholder="password" onChange={this.handleChange.bind(this)} />
              </div>
              <div className="form-group">
                <label className="checkbox-inline">
                  <input type="checkbox" value="option1" /> Remember Me?
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
    } else {
      return (
        <div className="container">
          <h3> You are Logged In </h3>
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    theState: state
  }
}

export default connect(mapStateToProps)(Login);
