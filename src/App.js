import React, { Component } from 'react';
import './ProductLink';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            { /*custom component inclusion*/}
            <product-link></product-link>
        </div>
      </div>
    );
  }
}

export default App;
