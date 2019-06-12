import React, { Component } from 'react';
import axios from 'axios';

class Work extends Component {
  constructor() {
      super();
      this.state = {
        dataku: [],
      };
  }

klikGet(e){
  e.preventDefault();
  var url = 'http://127.0.0.1:3210/data';
  axios.post(url, {
    location: this.inputLocation.value,
    categories: this.inputcategories.value
  })
  .then((ambilData) => {
    console.log(ambilData.data);
    this.setState({
      dataku: ambilData.data,
    }) 
  })
};
 
  render() {
    const dataMySQL = this.state.dataku.map((item, index)=>{
      return (
              <div class="col-md-6 col-lg-3 space-btm">
                <div class="iq-blog-box">
                    <div class="iq-blog-image clearfix">
                        <img class="img-fluid" src={require(`../${item.img}`)} alt="https://www.google.com"/>
                    </div>
                    <div class="iq-blog-detail">
                        <div class="blog-title"> <a href="blog-single.html"><h5 class="iq-tw-6"> {item.title}  </h5> </a> </div>
                        <div class="skill-iq-blog-meta">
                            <ul class="skill-list">
                                <li class="list-inline-item"><a href="https://www.google.com"><i class="fa fa-calendar" aria-hidden="true"></i> {item.up_date}  </a></li>
                                <li class="list-inline-item"><a href="https://www.google.com"><i class="fa fa-comment-o" aria-hidden="true"></i> 5</a></li>
                            </ul>
                        </div>
                        <div class="blog-content">
                            <p> {item.description}  </p>
                        </div>
                        <div class="blog-button">
                            <a href="https://www.google.com" class="pull-left iq-tw-6 iq-user"><i class="fa fa-user-circle" aria-hidden="true"></i> {item.author}  </a>
                            <a href="https://www.google.com" class="pull-right iq-tw-6">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></a> </div>
                        </div>
                    </div>
                </div>
            );
    })
    return (
      <div className="sign_up">
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <section className="iq-blog wrapper">
                    <div className="container-fluid h-100">
                        <div className="row row-eq-height h-100">
                            <div className="col-md-2 purple-bg">
                                <div className="course_filters">
                                    <br/><br/><div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-6">Filter by</h5> </a> </div>
                                    <div className="col-md-12">
                                        <label for="exampleSelect1">Location</label>
                                        <select className="form-control" id="location" name="other" onChange={this.klikGet.bind(this)} ref={ inLocation => this.inputLocation = inLocation }>
                                            <option value="All">All Locations</option>
                                            <option value="Yaounde">Yaounde</option>
                                            <option value="Douala">Douala</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <label for="exampleSelect1">Categories</label>
                                        <select className="form-control" id="categories" name="categories" onChange={this.klikGet.bind(this)} ref={ incategories => this.inputcategories = incategories }>
                                            <option value="All">All Categories</option>
                                            <option value="Agriculture">Agriculture</option>
                                            <option value="Information Technology">Information Technology</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <label for="exampleSelect1">Posted on</label>
                                        <button className="btn btn-success" style={{margin:'15px',width:'100px'}} onClick={this.klikGet.bind(this)}>FETCH</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10 main-content align-self-center" onLoad={this.klikGet.bind(this)}>
                                <div id="boxscroll" className="col-md-12 inner-box">
                                    <div className="iq-plr-40">
                                        <div className="row" id="show_product" >
                                              { dataMySQL }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
