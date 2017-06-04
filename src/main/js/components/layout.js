import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Footer from './footer';


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

  render(){
    return(
      <div>
        <Header onClick={this.handleClick} title={this.state.name}/>
        <Footer/>
      </div>
    );
  }
}
