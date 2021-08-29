import React, { Component } from 'react';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

import * as Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <Calendar.DateView />
    </div>
  );
}

export default App;
