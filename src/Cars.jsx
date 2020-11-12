// src/Cars.jsx
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './context/MyContext';


function Cars() {
  <MyContext.Consumer>
    { (value) => (
        <div>
          <div>
            <img
              className={value.redCar ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button
              onClick={() => console.log(value)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              //className={value.blueCar ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button
              //onClick={() => moveCar('blue', !blueCar)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={value.yellowCar ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button
              //onClick={() => moveCar('yellow', !yellowCar)}
              type="button"
            >
              Move
            </button>
          </div>
        </div>
      )
    }
  </MyContext.Consumer>
}

export default Cars;