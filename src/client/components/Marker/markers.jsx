import React, { Component } from 'react';
import DragScroll from 'react-dragscroll';
import MainStyle from './marker.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import markerPoint from '../../assets/svg/marker.svg';
import arrowPoint from '../../assets/svg/arrow-right-circle.svg';
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
    return (
      <div >
        {
          this.state.MAP.map((x,y)=>{
            let style = {
              top: x.coords[0],
              right: x.coords[1],
              bottom: x.coords[2],
              left: x.coords[3],
            }
            return  <ReactCSSTransitionGroup
            transitionName="wrapper"
            key={x.name}
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>
             <div className={`wrapper ${x.isActive ? 'active':null}`} style={style} id={`wrapper-${y}`} onClick={()=>this.handleClick(`wrapper-${y}`)} tabIndex={y}  key={y}  onBlur={(e) =>this.handleRemove(`wrapper-${y}`)}>
              <img key={y} ref={`mark-${y}`} name={`marker-point-${y}`}   className={`marker point`} src={markerPoint} alt="" />
              <div name={`marker-point-${y}`} className={`contents`} onClick={() =>this.props.onMarkerClick(x)}  >{x.name}<img src={arrowPoint} alt=""  /></div> 
            </div>
            </ReactCSSTransitionGroup>
          })
        }
      </div>
    );
  }
}
