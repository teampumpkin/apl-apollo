import React, { Component } from 'react';
import DragScroll from 'react-dragscroll';
import MainStyle from './index.scss';
import Markers from './markers';
import Product from './product';
import {Button} from 'react-bootstrap';
export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      popup:false,
      MAP: [
        { name: "2", shape: "circle", coords: [1055, 0, 0, 592], name: "ROW HOUSES", isActive: false, marker: "Group19.png", expandIcon: "arrow-right-circle.png" },
        // { name: "3", shape: "circle", coords: [120, 40, 10, 35], name: "ROW HOUSES", isActive:false,marker: "Group19.png", expandIcon: "arrow-right-circle.png" },
        // { name: "4", shape: "circle", coords: [100, 500, 10, 35], name: "ROW HOUSES", isActive:false,marker: "Group19.png", expandIcon: "arrow-right-circle.png" },
        // { name: "5", shape: "circle", coords: [200, 100, 10, 78], name: "ROW HOUSES", isActive:false,marker: "Group19.png", expandIcon: "arrow-right-circle.png" },
      ]
    }
  }
  onMarkerClick = (e) => {
    let MAP = this.state.MAP;
    let idx = null;
    if (e.target.classList.contains('marker')) {
      idx = e.target.getAttribute('name').split('-')[2];
    }
    MAP = MAP.map((x, y) => {
      x.isActive = false;
      if (y == idx) {
        x.isActive = true;
      }
      return x;
    });
    this.setState({ MAP: MAP });
  }
  showProduct = (product) =>{
    console.log("------>",product)
    this.props.history.push(`/${'sssss'}/${'sssssss'}`);
  }
  render() {
    return (
      <div className="body">
        <DragScroll className="map" >
          <img src="../assets/map.png" alt="" />
          <div className={'chart'} onClick={this.onMarkerClick}>
            <Markers mappoints={this.state.MAP} onMarkerClick={this.showProduct} />
          </div>
        </DragScroll>
      </div>
    );
  }
}
