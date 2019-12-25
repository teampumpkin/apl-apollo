import React, { Component } from 'react';
import style from './layout1.scss';
import { getGradient } from '../gradient';
import GifPlayer from '../gifPlayer';
export default class Layout1 extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
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
        const node = this.myRef.current;
        node.style.display = "none";
        this.setState({ activeIndex: key, activeGalaryIndex: 1 })
    }
    changeImage = (key) => {
        this.setState({ activeGalaryIndex: key })
    }

    render() {
        const { data, activeIndex, activeGalaryIndex } = this.state;
        const item = Object.keys(data).length > 0 && data.items.length > 0 ? data.items[activeIndex - 1] : null;
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
                                            <img src={key == activeIndex && x.iconActive ? `../../assets/svg/${x.iconActive}` : (x.iconInActive ? `../../assets/svg/${x.iconInActive}` : null)} />
                                            <label>{x.title}</label>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="body">
                            <div className={`leftNav`}>
                                {
                                    data.items.map((x, y) => {
                                       return  <div className="base-img" key={y} ref={this.myRef}>
                                            {x.assets.map((z, p) => {
                                                return <div key={p} className={`${(activeGalaryIndex - 1) == p && (activeIndex - 1) == y ? null : 'hidden'}`}>
                                                    {z.url ? <img className={`${z.animation ? 'fade' : null}`} src={`/assets/images/${z.url}`} /> : null}
                                                    {z.animation ? <GifPlayer data={Math.random() * (10 - 100) + 100} src={`${(activeGalaryIndex - 1) == p && (activeIndex - 1) == y ?z.animation:null}`} /> : null}
                                                </div>
                                            })}
                                        </div>
                                    })
                                }

                                <div className="galary">
                                    {item ?
                                        item.assets.map((img, idx) => {
                                            const k = idx + 1;
                                            return <img key={k} src={img && (img.url || img.thumb) ? `../../assets/images/${img.thumb || img.url}` : null} className={`${k == activeGalaryIndex ? 'active' : null}`} onClick={() => this.changeImage(k)} />
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
