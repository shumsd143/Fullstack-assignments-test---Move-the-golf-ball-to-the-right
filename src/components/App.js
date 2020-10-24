import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,//variable needed to be changed
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.renderChoice = this.renderChoice.bind(this)
    };

    //call back function
    buttonClickHandler() {
        this.setState({
            renderBall:true
        })
    }
    renderChoice(e) {
        e = e || window.event;
        if (e.keyCode == '39') {
            this.setState({
                posi:this.state.posi+1,
                ballPosition:{
                    left: (this.state.posi+1)*5+'px'
                }
            })
        }
    }

    //bind ArrowRight keydown event
    componentDidMount() {
        window.onkeydown = this.renderChoice
    }

    render() {
        return (
            <div className="playground">
                {this.state.renderBall?<div className="ball" style={this.state.ballPosition}></div>:<button onClick={this.buttonClickHandler} >Click For One Ball</button>}
            </div>
        )
    }
}


export default App;
