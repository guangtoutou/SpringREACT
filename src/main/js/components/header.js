import React from 'react';
import ReactDOM from 'react-dom'

export default class Header extends React.Component{


  handleClick(e){
    console.log("clicked");
    this.props.changeTitle(e.target.value);
  }

  render(){
    return(
      <div>
        <h1>hello, {this.props.title}</h1>
        <button onClick={this.handleClick.bind(this)}>click</button>
      </div>
    );
  }
}
