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
        this.ArrowRight = this.ArrowRight.bind(this)
    };

    //call back function
    buttonClickHandler() {
        this.setState({
            renderBall:true
        })
    }
    ArrowRight(e) {
        if (e.key === 'ArrowRight') {
            this.setState({
                 ballPosition: { left: this.state.posi+ "px"}, posi: this.state.posi + 5 
            })
        }
    }

    //bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener('keydown',(e)=>{
            this.ArrowRight(e)
        })
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
