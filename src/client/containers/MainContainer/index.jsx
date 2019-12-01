import React, { Component } from 'react';
import DragScroll from 'react-dragscroll';
import MainStyle from './index.scss';
import Markers from '../../components/Marker/markers';
export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      MAP: [
        // { name: "2", coords: [1055, 0, 0, 592], name: "ROW HOUSES", isActive: false, marker: "Group19.png", expandIcon: "arrow-right-circle.png" },
      ]
    }
  }
  componentWillMount() {
    this.props.getProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { list } = nextProps.productReducer;
    if (list && list.length > 0) {
      let map = list.map(x => {
        x = { ...x, isActive: false, coords: [1055, 0, 0, 592] };
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
  showProduct = (product) => {
    this.props.getAssets(product.id)
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
