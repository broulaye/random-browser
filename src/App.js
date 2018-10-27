import React, { Component } from 'react';
import './App.css';

import Spinner from './components/Spinner';
import RepeatButton from './components/RepeatButton';
import Legend from './components/Legend';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this._child.forceUpdateHandler();
  }

  render() {
    return (
      <div>
        <Legend />
        <div className="spinner-container">
          <Spinner ref={(child) => { this._child = child; }} timer="1200" />
          <div className="gradient-fade"></div>
        </div>
        <RepeatButton onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
