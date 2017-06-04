import React from 'react';
import ReactDOM from 'react-dom'

export default class Header extends React.Component{
  render(props){
    return(
      <div>
        <h1>hello, {this.props.title}</h1>
        <button onClick={this.props.onClick}>click</button>
      </div>
    );
  }
}
