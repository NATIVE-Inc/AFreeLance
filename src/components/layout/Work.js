import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import _ from 'lodash';

class Work extends Component {
  constructor(props) {
      super(props);
      this.state = {
        work: [],
        categories: 'uncategorized',
        location: 'uncategorized'
      };
  }

  filterJobs(e) {
    e.preventDefault()
    var url = 'http://127.0.0.1:5000/api/data/filter';
    axios.post(url, {
      category: this.refs.category.value,
      location: this.refs.location.value
    })
    .then((res) => {
      this.setState({
        work: res.data, // puts all posts in state
      });
    })
    // rendering the filtered jobs
    this.renderJobs()
  }

  renderJobs() {
    // the list is rendered in reverse order
    return _.map(this.state.work.reverse(), post => {
      return (
        <div className="row card-work" key={post._id} id={post._id} onClick={this.goToDetails.bind(this)} >
        <img className="card-img col-md-2" src={require('../images/blog/01.jpg')}  alt="the_image"/>
        <div className="card-block col-md-8">
          <div className="card-title paddingClr">{post.title}</div>
          <p className="card-text paddingClr">{post.descr}</p><br/>
          <div className="card-info ">{post.author} - {post.location}  / <span className="up_date">(posted {post.createdAt} ago)</span></div>
          <div className="card-info "><a>{post.category}</a> <a>{post.skillList}</a></div>
        </div>
        <div className="col-md-2 fee">
          {post.amount} FCFA
        </div>
    </div>
      )
    });
  }

  // route to the details of the post
  goToDetails(e) {
    var data =  e.currentTarget.id; // this is the id of post clicked
    this.props.dispatch({
      type: 'JOB_DETAIL',
      data
    })
    this.props.history.push('/details')
  }

  handleChange(e){
    const name = e.target.ref;
    const value = e.target.value;
    this.setState({
      [name]: value,
    })
  }

  componentDidMount() {
    var url = 'http://127.0.0.1:5000/api/data';
    axios.get(url)
    .then((res) => {
      this.setState({
        work: res.data,
      });
    })
  };

  render() {
    return (
            <div className="container">
              <div className="col-md-12 ">
                <div className="row">
                  <div className="col-md-3 section-container">
                  <div className="form-group theShadow sidebar">
              <label> Filters </label>
                    <fieldset className="form-group">
                      <select className="form-control"  ref="category" onChange={this.filterJobs.bind(this)}>
                        <option value='uncategorized'>Category</option>
                        <option>Agriculture</option>
                        <option>Information Technology</option>
                        <option>Real Estate</option>
                      </select>
                    </fieldset>
                    <fieldset className="form-group">
                      <select className="form-control"  ref="location" onChange={this.filterJobs.bind(this)}>
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
                <div><br /><h5>{this.state.work.length} Posts</h5></div>
                    {this.renderJobs()}
                    </div>
                  </div>
                </div>
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

export default connect(mapStateToProps)(Work);
