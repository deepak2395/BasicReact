import React, { Component } from 'react';

function CustomTextInput(props) {
    return (
        <div>
            <input defaultValue="here focus" ref={props.inputRef} />
        </div>
    );
}


class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount() {
        this.inputElement.current.focus()
    }

    render() {
        return (
            <div>
                <CustomTextInput inputRef={this.inputElement} />
                {/* <input autofocus="true" /> */}
            </div>
        );
    }
}


export default Parent;