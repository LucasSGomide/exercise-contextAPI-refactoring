import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './contextAPI/MyContext';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
    
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, bool) {
    this.setState({
      [car]:bool
    });
  }

  render() {
    const { red, blue , yellow } = this.state;

    const cars = {
      red,
      blue,
      yellow,
      moveCar: this.moveCar,
    }
    return (
      <MyContext.Provider value={cars}>
        <Cars />
      </MyContext.Provider>
    )
  }
}

export default App;
