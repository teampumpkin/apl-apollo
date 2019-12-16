import React, { Component } from 'react';
export default class GifPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {rand:Math.floor(Math.random() * 10000)}
    }
    componentDidUpdate(){
        
    }
    shouldComponentUpdate(){
        return true;
    }
    render() {
        return (
            <>
            <img  className={`base-animation ${!this.props.src ? 'hidden':null}`}  src={`../../assets/gifs/${this.props.src}`} />
            </>
        );
    }
};
