import React, { Component } from 'react';
/* 
shouldComponentUpdate
https://guide.freecodecamp.org/certifications/front-end-libraries/react/optimize-re-renders-with-shouldcomponentupdate/ */


class Dialog extends React.Component {
  constructor(props) {
    //1
    super(props);
  }
  componentWillUpdate() {
    //3
    console.log('Component is about to update...');
  }
  // change code below this line
 componentWillReceiveProps(nextProps){
   //2
    console.log(this.props)
    console.log(nextProps)
  }
  componentDidUpdate(){
    //5
     console.log('component has updated.')
  }
  // change code above this line
  render() {
    //4
    return <h1>{this.props.message}</h1>
  }
};


class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};

export default Controller;