import React from 'react';
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
        color: 'red'
      },
    }

    this.moveCars = this.moveCars.bind(this);
    this.handleSignal = this.handleSignal.bind(this);
  }

  handleSignal(color) {
    this.setState({
      signal: {
        color: color,
      }
    });
  }

  moveCars(car, bool) {
    this.setState({
      cars: {
        [car]: bool
      }
    });
  }

  render() {
    const { redCar, blueCar, yellowCar } = this.state.cars;
    const { color } = this.state.signal;

    const myProvider = {
      redCar,
      blueCar,
      yellowCar,
      moveCar: this.moveCars,
      color,
      changeSignal: this.handleSignal,
    }

    const { children } = this.props

    return (
      <MyContext.Provider value={myProvider}>
        { children }
      </MyContext.Provider>
    );
  }
}

export default Provider;