import React from 'react';
import ReactDOM from 'react-dom'

export default class Header extends React.Component{
  constructor(){
    super();
    this.state = {title:'James'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({title:e.target.value});
  }

  render(props){
    return(
      <div>
        <h1>hello, {this.state.title}</h1>
        <input onChange={this.handleChange}/>
      </div>
    );
  }
}
