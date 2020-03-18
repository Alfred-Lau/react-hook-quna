import React, { createContext, Component } from 'react';
import './App.css';

const BatteryContext = createContext();
/* 
class Leaf extends Component {
  static contextType = BatteryContext;
  render() {
    return (
      <BatteryContext.Consumer>
        {value => {
          return <h1> Battery: {value}</h1>;
        }}
      </BatteryContext.Consumer>
    );
  }
} */

class Leaf extends Component {
  static contextType = BatteryContext;
  render() {
    const battery = this.context;
    return <h1> Battery: {battery}</h1>;
  }
}
class Middle extends Component {
  render() {
    return <Leaf></Leaf>;
  }
}

class App extends Component {
  state = {
    Battery: 60
  };
  render() {
    return (
      <div className='App'>
        <BatteryContext.Provider value={this.state.Battery}>
          <button
            onClick={() => this.setState({ Battery: this.state.Battery - 1 })}
          >
            press me
          </button>
          <Middle></Middle>
        </BatteryContext.Provider>
      </div>
    );
  }
}

export default App;
