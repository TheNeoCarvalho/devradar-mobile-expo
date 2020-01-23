import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Routes from './src/routes'

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#24292e"/>
      <Routes />
    </>
  );
};

export default App;
