import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Footer from './footer';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {name:"james"};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log("clicked");
    this.setState({name:"cindy"});
  }


  componentDidMount() {
    fetch('http://localhost:8080/api/employees')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(json) {
            console.log(json._embedded.employees);
        });
      this.setState({name:"james ni"})
  }

  render(){
    return(
      <div>
        <Header onClick={this.handleClick} title={this.state.name}/>
        <Footer/>
      </div>
    );
  }
}
