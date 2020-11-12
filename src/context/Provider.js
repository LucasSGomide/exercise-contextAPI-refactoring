import React, { children } from 'react';
import MyContext from './MyContext';

class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
      signal: {
        red,
        blue,
        yellow,
      },
    }

    this.moveCars = this.moveCars.bind(this);
  }

  handleSignal() {

  }

  moveCars(car, bool) {
    this.setState({
      [car]: bool
    })
  }

  render() {
    const { cars } = this.state;
    return (
      <MyContext.Provider value={...cars, this.moveCars}>
        { children }
      </MyContext.Provider>
    );
  }
}

export default Provider;