import React, { Component } from 'react';
export default class GifPlayer extends Component {
    constructor(props){
        super(props);
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
