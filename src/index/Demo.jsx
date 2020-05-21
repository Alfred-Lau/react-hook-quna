import React from 'react';

export default class Demo extends React.Component {
  componentDidUpdate(prevProps) {
    // will be true
    // const locationChanged = this.props.location !== prevProps.location;

    // INCORRECT, will *always* be false because history is mutable.
    const locationChanged =
      this.props.history.location !== prevProps.history.location;
    console.log('locationChanged', locationChanged);
  }

  navigate = () => {
    // this.props.history.block((target) => {
    //   console.log('target', target);
    //   return false;
    // });

    this.props.history.go(-1);
  };
  render() {
    console.log('render');
    return <div onClick={this.navigate}>demo</div>;
  }
}
