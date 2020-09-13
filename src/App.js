import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }

}
export default App;
