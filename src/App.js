import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import Shots from './containers/Shots';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Shots />
      </div>
    </Provider>
  );
}

export default App;
