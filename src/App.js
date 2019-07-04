import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      index: ""
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }
  Delete =(event) => {
    this.setState({index: event.splice.List})
  }  

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
      
    });
  }
 
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          
          <button>Add</button>
          
        </form>

        



        <List style={{textDecoration:"line-through"}} items={this.state.items} />
      </div>
    );
  }
}
