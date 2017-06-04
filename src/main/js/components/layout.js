import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Footer from './footer';


export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {name:"james"};
  }

  changeTitle(){
    console.log("clicked");
    this.setState({name:"cindy"});
  }

  render(){
    return(
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.name}/>
        <Footer/>
      </div>
    );
  }
}
