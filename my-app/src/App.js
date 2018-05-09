import React, { Component } from 'react';
import './App.css';
import './BasicExample.css';
import MobileMenu from './MobileMenu.js';
import BasicExample from './basic.js';
import Slider from './Carousel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Jakiś text</h2>
        </div>


        <div>
          

          <MobileMenu />

        </div>
      </div>
    );
  }
}

export default App;
