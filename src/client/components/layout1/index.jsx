import React, { Component } from 'react';
import style from './layout1.scss';
const images = require.context('../../assets/images', true);
const svgs = require.context('../../assets/svg', true);
const gifs = require.context('../../assets/gifs', true);
import { getGradient } from '../gradient';
import GifPlayer from '../gifPlayer';
export default class Layout1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            activeIndex: 1,
            activeGalaryIndex: 1,
            layout: {
                header: null,
                leftNav: null,
                component: null
            }
        }
    }

    changeItem = (key) => {
        this.setState({ activeIndex: key, activeGalaryIndex: 1 })
    }
    changeImage = (key) => {
        this.setState({ activeGalaryIndex: key })
    }
    getImage = (img) => {
        if (img) {
            if (img.includes('.svg')) {
                return img && img != null ? svgs('./' + img) : null;
            } else if (img.includes('.gif')) {
                return img && img != null ? gifs('./' + img) : null;
            } else {
                return img && img != null ? images('./' + img) : null;
            }
        } else {
            return null;
        }
    }

    render() {
        const { data, activeIndex, activeGalaryIndex } = this.state;
        const item = Object.keys(data).length > 0 && data.items.length > 0 ? data.items[activeIndex - 1] : null;
        console.log("------->",item)
        return (
            <>
                {data && Object.keys(data).length > 0 ? <div className="layout1" >
                    <div className="card">
                        <div className="header">
                            <div className="row">
                                {
                                    data.items.map((x, y) => {
                                        const key = y + 1;
                                        return <div style={key == activeIndex ? getGradient(data.colorCode) : null} key={key} className={`col ${key == activeIndex ? 'active' : null}`} onClick={() => this.changeItem(key)}>
                                            <img src={key == activeIndex && x.iconActive ? this.getImage(x.iconActive) : (x.iconInActive ? this.getImage(x.iconInActive) : null)} />
                                            <label>{x.title}</label>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="body">
                            <div className={`leftNav`}>
                                <div className="base-img">
                                    {
                                    item.assets.map((x,y) => {
                                            return <div key={y} className={`${activeGalaryIndex -1 != y ? 'hidden':null}`}>
                                                <img className={`${x.animation ? 'fade' : null}`} src={`/assets/images/${item.assets[activeGalaryIndex - 1].url}`} />
                                                <GifPlayer  src={x.animation ? `../../assets/gifs/${x.animation}` : null} />
                                            </div>
                                        })
                                    }
                                </div>
                                <div className="galary">
                                    {item ?
                                        item.assets.map((img, idx) => {
                                            const k = idx + 1;
                                            return <img key={k} src={img && (img.url || img.thumb) ? this.getImage(`${img.thumb || img.url}`) : null} className={`${k == activeGalaryIndex ? 'active' : null}`} onClick={() => this.changeImage(k)} />
                                        })
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="rightNav">
                                <div className="row">
                                    <div className="head title">
                                        <span> {data.name.split(' ')[0]} </span><span>{data.name.split(' ').splice(1).join(' ')}</span>
                                    </div>
                                    <p className="discription">{data.discription}</p>
                                </div>
                                <div className={`component row`} style={getGradient(data.colorCode)}>
                                    <div className="item">
                                        <span>&nbsp;{item ? item.subTitle : null}</span>
                                    </div>
                                    <div className="discription">
                                        <p>{item ? item.discription : null}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}
            </>
        );
    }
}