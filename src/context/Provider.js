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
        red: true,
        blue: false,
        yellow: false,
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
    const { redCar, blueCar, yellowCar } = this.state.cars;

    const provideCars = {
      redCar,
      blueCar,
      yellowCar,
      moveCars: this.moveCars,
    }

    return (
      <MyContext.Provider value={provideCars}>
        { children }
      </MyContext.Provider>
    );
  }
}

export default Provider;