import React, { createContext, Component, lazy, Suspense, memo } from 'react';
import './App.css';

// webpack magic comment
const About = lazy(() => import(/*webpackChunkName:'about'*/ './about'));
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

const Foo = memo(props => {
  // console.log('foo');
  return <div>aa</div>;
});
/* 
const Foo = props => {
  console.log('foo');
  return <div>aa</div>;
}; */

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
    Battery: 60,
    error: false
  };

  /* componentDidCatch() {
    this.setState({
      error: true
    });
  } */

  /* 如遇页面报错，右上角小x关掉 */
  static getDerivedStateFromError() {
    return {
      error: true
    };
  }

  componentWillMount(){
    console.log('will mount');
  }

  componentDidMount(){
    console.log('did mount');
  }

  render() {
    if (this.state.error) {
      return <div>error</div>;
    }

    console.log('render');

    return (
      <div className='App'>
        <BatteryContext.Provider value={this.state.Battery}>
          <button
            onClick={() => this.setState({ Battery: this.state.Battery - 1 })}
          >
            press me
          </button>
          <Middle></Middle>
          <Suspense fallback={<div>loading</div>}>
            <About></About>
          </Suspense>
        </BatteryContext.Provider>
        <Foo></Foo>
      </div>
    );
  }
}

export default App;
