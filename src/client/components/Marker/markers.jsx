import React, { Component } from 'react';
import DragScroll from 'react-dragscroll';
import MainStyle from './marker.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import markerPoint from '../../assets/svg/point.svg';
import arrowPoint from '../../assets/svg/arrow-right-circle.svg';
import path from '../../assets/svg/path.svg';
export default class Markers extends Component {
  constructor(props) {
    super(props);
    this.state = { MAP: []};
  }
  componentWillMount(){
    this.setState({MAP:this.props.mappoints});
  }
  componentWillReceiveProps(nextProps){
    this.setState({MAP:nextProps.mappoints});
  }
  handleRemove = (e) => {
    document.getElementById(e).classList.remove('active');
  }
  handleClick = (e) =>{
    document.getElementById(e).classList.add('active');
  }

  render() {
    console.log("=========>",this.state.MAP)
    return (
      <div >
        {
          this.state.MAP.map((x,y)=>{
            let style = {
              top: x.coords.top,
              right: x.coords.right,
              bottom: x.coords.bottom,
              left: x.coords.left,
              color:x.colorCode
            }
            return  <ReactCSSTransitionGroup
            transitionName="wrapper"
            key={y}
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>
             <div className={`wrapper ${x.isActive ? 'active':null}`} style={style} id={`wrapper-${y}`} onClick={()=>this.handleClick(`wrapper-${y}`)} tabIndex={y}  key={y}  onBlur={(e) =>this.handleRemove(`wrapper-${y}`)}>
              <img style={{backgroundColor:x.colorCode}} key={y} ref={`mark-${y}`} name={`marker-point-${y}`}   className={`marker point`} src={markerPoint} alt="" />
              <div name={`marker-point-${y}`} className={`contents`} onClick={() =>this.props.onMarkerClick(x)}  >{x.name}<img src={arrowPoint} alt=""  /></div> 
            </div>
            </ReactCSSTransitionGroup>
          })
        }
      </div>
    );
  }
}
