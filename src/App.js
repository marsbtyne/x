import React, { Component } from 'react';
import { Clock, Grommet } from 'grommet';
import Tree from './components/Tree';

import pusheen from './assets/pusheen.gif';
import './App.css';

const theme = {
  global: {
    font: {
      family: 'Helvetica',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <header className="App-header">
        {/* <img src={pusheen} /> */}
        {/* <Clock type="digital" run="backward" time="PT17H13M20S"/> */}
        < Tree />
      </header>
      </Grommet>
  );
}

export default App;
