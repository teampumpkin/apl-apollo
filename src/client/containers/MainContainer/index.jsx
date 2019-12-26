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

  handleOnMouseEnter(e, x) {
    document.getElementById('animation-gif').setAttribute('src', `../assets/map-gifs/${x.animation}`);
  }
  handleOnMouseLeave(e) {
    document.getElementById('animation-gif').setAttribute('src', null);
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

  showProduct = (category) => {
    this.props.history.push(`/${category.name.replace(' ', '-').toLowerCase()}`);
  }
  render() {
    return (
      <div className="body">
        <DragScroll className="map" >
          <img src="../assets/map.png" alt="" />
          <img id="animation-gif" src="" className="animation-outline" alt="" />
          <div className={'chart'}>
            <Markers mappoints={this.state.MAP} onMarkerClick={this.showProduct} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave} />
          </div>
        </DragScroll>
      </div>
    );
  }
}
