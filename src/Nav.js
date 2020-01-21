import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { browserHistory } from 'history'
import { BrowserRouter, Route } from 'react-router-dom'
import './Nav.css';


class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick(e) {
   // this.props.history.push(`/help`)
    //this.props.push('/dashboard')
  }


  render() {
    return (
      <div className="nav_top">
        <div /* onClick= *//* {(e) => this._onButtonClick(e)} *//*  {this._onButtonClick}  */ key="1" id="dee" className="btn1"><NavLink to="/help">btn1</NavLink></div>
        <div onClick={this._onButtonClick} key="2" className="btn2">btn2</div>
        <div onClick={this._onButtonClick} key="3" className="btn3">btn3</div>
      </div>
    );
  }
}

export default Nav;