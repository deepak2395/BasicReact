import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Nav from './Nav';
import notify from './notification';
import help from './help';
import ComponentDM from './componentDidmount';
import ComponentWM from './componentWillmount';
import Controller from './componentwdupdate';
import iConversion from './iconversion';
import Focus from './focustrial';
import events from './events';
import Clock from './Clock';
import todo from './todo';



class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Route path='/home' component={Main} />
        <Route path='/notification' component={notify} />
        <Route path='/help' component={help} />
        <Route path='/cdm' component={ComponentDM} />
        <Route path='/cwm' component={ComponentWM} />
        <Route path='/cont' component={Controller} />
        <Route path='/iconversion' component={iConversion} />
        <Route path='/focus' component={Focus} />
        <Route path='/events' component={events} />
        <Route path='/Clock' component={Clock} />
        <Route path='/todo' component={todo} />
      </BrowserRouter>

    /*   <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */
    );
  }
}

export default App;
