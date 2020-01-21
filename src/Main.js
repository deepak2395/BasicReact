import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import './Main.css';
import Nav from './Nav';


class Main extends Component {

    render() {
      return (
        <div className="Main_frame">
        
          <div className="nav_frame"><Nav /></div>
          <div className="body_frame"></div>
          <div className="foot_frame"></div>
        </div>
      );
    }
  }

  export default Main;