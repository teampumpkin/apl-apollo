import React, { Component } from 'react';
import DragScroll from 'react-dragscroll';
import MainStyle from './index.scss';
import Markers from '../../components/Marker/markers';
export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.props.getProducts();
    // this.props.getAssets(17);
    this.state = {
      popup: false,
      MAP: []
    }
  }
  componentWillMount() {
    
  }

  componentWillReceiveProps(nextProps) {
    const { list } = nextProps.productReducer;
    if (list && list.length > 0) {
      let map = list.map(x => {
        x = { ...x, isActive: false };
        return x;
      })
      this.setState({ MAP: map });
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
  showProduct = (category) => {
    this.props.history.push(`/${category.name.replace(' ','-').toLowerCase()}`);
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
