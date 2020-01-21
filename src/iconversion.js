import React, { Component } from 'react';

import './iconv.css';

import Parent from './focustrial';

class Main extends Component {

    constructor(props) {
        super(props);
        //   this.onClickLib = this.onClickLib.bind(this);
        this.state = {
            ActiveclassName: '',
            active: true,
            method: "forword"
        }

    }

    onClickLibLeft = (event) => {
        var element = document.querySelectorAll('.dropdown-menu.left li');
        for (var i = 0; i < element.length; i++) {
            element[i].classList.remove("active");
        }
        event.target.classList.add("active");
    }

    onClickLibRight = (event) => {
        var element = document.querySelectorAll('.dropdown-menu.right li');
        for (var i = 0; i < element.length; i++) {
            element[i].classList.remove("active");
        }
        event.target.classList.add("active");
    }

    onClickConvert = (event) => {
        var element = document.querySelectorAll('.dropdown-menu li.active');
        if (element.length > 1) {
            var input = document.querySelectorAll('#input');
            var method = document.querySelectorAll('.dropdown-menu.inputBox .active')[0].innerText
            var conv_method = "forward"
            switch (method) {
                case 'iCore':
                    conv_method = "forward"
                    break;
                case 'Jats':
                    conv_method = "forward"
                    break;
                case 'Bits':
                    conv_method = "bitstoxml"
                    break;
                default:
                    conv_method = "forward"
                    break;
            }
            this.setState = {
                method: conv_method
            }
            var conversionObj = {
                conversion_type: "journal",
                conversion_method: conv_method,
                DOMContent: input[0].innerHTML,
                metaData: "",
                comment: "",
                equation: "",
                configuration: {
                    "resourcepath": "",
                    "blobDomain": "",
                    "customer_dtd": ""
                },
            };


            var data = JSON.stringify(conversionObj)

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                    var elementOut = document.querySelectorAll('#output');
                    elementOut[0].innerHTML = this.responseText
                }
            });

            xhr.open("POST", "http://localhost:8081/api/conversion/testing");
            //  xhr.setRequestHeader("Content-type", "application/json");
            //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            /* xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
             xhr.setRequestHeader("Access-Control-Request-Headers", "access-control-allow-origin, content-type"); */
            // xhr.setRequestHeader("Access-Control-Allow-Credentials", true);

            xhr.send(data);



        } else {
            alert('Please select the types')
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="Top_frame">
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                        <a className="navbar-brand" href="#">Logo</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="Main_frame">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-1 col-md-1 col-lg-2"></div>
                            <div className="col-sm-5 col-md-5 col-lg-1">Input Format:</div>
                            <div className="col-sm-5 col-md-5 col-lg-2">
                                <div className="dropdown left">
                                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Avaliable Formates
                                    <span className="caret"></span></button>
                                    <ul className="dropdown-menu inputBox">
                                        <li className="dropdown-header">Dropdown header 1</li>
                                        <li onClick={this.onClickLibLeft}>iCore</li>
                                        <li onClick={this.onClickLibLeft}>Jats</li>
                                        <li onClick={this.onClickLibLeft}>Bits</li>
                                        <li className="divider"></li>
                                        <li className="dropdown-header">Dropdown header 2</li>
                                        <li>About Us</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-5 col-md-5 col-lg-2"></div>
                            <div className="col-sm-5 col-md-5 col-lg-1">Output Format:</div>
                            <div className="col-sm-5 col-md-5 col-lg-2">
                                <div className="dropdown right">
                                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Avaliable Formates
                                    <span className="caret"></span></button>
                                    <ul className="dropdown-menu outputBox">
                                        <li className="dropdown-header">Dropdown header 1</li>
                                        <li onClick={this.onClickLibRight}>iCore</li>
                                        <li onClick={this.onClickLibRight}>Jats</li>
                                        <li onClick={this.onClickLibRight}>Bits</li>
                                        <li className="divider"></li>
                                        <li className="dropdown-header">Dropdown header 2</li>
                                        <li>About Us</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-1 col-md-1 col-lg-2"></div>
                        </div>
                        <div className="row float_center">
                            <div className="col-sm-1 col-md-1 col-lg-1"></div>
                            <div onClick={this.onClickConvert} className="col-sm-5 col-md-5 col-lg-10 col-centered"><button type="button" className="btn btn-success">Success</button></div>
                            <div className="col-sm-1 col-md-1 col-lg-1"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1 col-md-1 col-lg-1"></div>
                            <div id="input" contentEditable="true" className="col-sm-5 col-md-5 col-lg-5">
                                a
                            </div>
                            <div id="output" className="col-sm-5 col-md-5 col-lg-5">
                                a
                            </div>
                            <div className="col-sm-1 col-md-1 col-lg-1"><Parent /></div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;