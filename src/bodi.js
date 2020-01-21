import React, { Component } from 'react';

class bodi extends Component {

    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }
    render() {
        return (
          <div className="nav_top">
            <div onClick={(e) => this._onButtonClick(e)} key="1" id="dee" className="btn1">btn5</div>
            <div onClick={this._onButtonClick} key="2" className="btn2">btn6</div>
            <div onClick={this._onButtonClick} key="3" className="btn3">btn7</div>
          </div>
        );
      }
   
  }
  
  export default bodi;