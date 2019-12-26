import React, { Component } from 'react';
import MainStyle from './marker.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import markerPoint from '../../assets/svg/point2.svg';
import arrowPoint from '../../assets/svg/arrow-right-circle.svg';
export default class Markers extends Component {
  constructor(props) {
    super(props);
    this.state = { MAP: [] };
  }
  componentWillMount() {
    this.setState({ MAP: this.props.mappoints });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ MAP: nextProps.mappoints });
  }
  // handleRemove = (e) => {
  //   document.getElementById(e).classList.remove('active');
  // }
  // handleClick = (e) =>{
  //   document.getElementById(e).classList.add('active');
  // }
  getMarkerGif = (color) => {
    switch (color) {
      case '#016F74':
        return '../../assets/Blue.gif';
      case "#727903":
        return '../../assets/Green.gif';
      case "#EF6A15":
        return '../../assets/Orange.gif';
      default:
        return '../../assets/Blue.gif';
    }
  }
  render() {
    return (
      <div >
        {
          this.state.MAP.map((x, y) => {
            let position = {
              top: x.coords.top,
              right: x.coords.right,
              bottom: x.coords.bottom,
              left: x.coords.left,
            }
            const style = {
              color: x.colorCode,
              boxShadow: "0px 3px 17px #05FFFFD3"
            }
            return <ReactCSSTransitionGroup
              transitionName="wrapper"
              key={y}
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnter={false}
              transitionLeave={false}>
              {/* <div className={`wrapper ${x.isActive ? 'active':null}`} style={position} id={`wrapper-${y}`} onClick={()=>this.handleClick(`wrapper-${y}`)} tabIndex={y}  key={y}  onBlur={(e) =>this.handleRemove(`wrapper-${y}`)}> */}
              <div className={`wrapper ${x.isActive ? 'active' : null}`} style={position} id={`wrapper-${y}`} tabIndex={y} key={y} onMouseEnter={(e) => this.props.onMouseEnter(e, x)} onMouseLeave={this.props.onMouseLeave}>
                <img key={y} ref={`mark-${y}`} name={`marker-point-${y}`} className={`marker point`} src={this.getMarkerGif(x.colorCode)} alt="" />
                <div style={{ backgroundColor: x.colorCode }} name={`marker-point-${y}`} className={`contents`} onClick={() => this.props.onMarkerClick(x)}  >{x.name}<img src={arrowPoint} alt="" /></div>
              </div>
            </ReactCSSTransitionGroup>
          })
        }
      </div>
    );
  }
}
