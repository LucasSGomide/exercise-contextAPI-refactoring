import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from './context/Provider';
import MyContext from './context/MyContext';


ReactDOM.render(
  <React.StrictMode>
    <MyContext.Provider>
      <App />
    </MyContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
