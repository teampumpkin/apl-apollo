import React, { Component } from 'react';
import style from './product.scss';
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MAP: [
                { name: "2", shape: "circle", coords: [1055, 0, 0, 592], name: "ROW HOUSES", isActive: false, marker: "Group19.png", expandIcon: "arrow-right-circle.png" },
            ],
            data: {},
            activeIndex: 1,
            activeGalaryIndex: 1,
            layout: {
                header: null,
                leftNav: null,
                component: null
            }
        }
        this.props.getAssets(this.props.productReducer.selectedProductId)
    }
    componentWillMount(){
        
    }
    componentDidMount() {
        // const {assets} = this.props.productReducer;
    }
    componentWillReceiveProps(nextProps) {
        const { assets } = nextProps.productReducer;
        if (assets && Object.keys(assets).length > 0) {
            this.setState({data:assets})
        }
    }
    changeItem = (key) => {
        this.setState({activeIndex:key})
    }
    changeImage = (key) => {
        this.setState({activeGalaryIndex:key})
    }
   
    render() {
        const { data, activeIndex, activeGalaryIndex } = this.state;
        const item = Object.keys(data).length > 0 ? data.items[activeIndex - 1]:null;
        return (
            <>
                {data && Object.keys(data).length > 0 ? <div className="conatiner" >
                    <div className="card">
                        <div className="header">
                            <div className="row">
                                {
                                    data.items.map((x, y) => {
                                        const key = y + 1;
                                        return <div key={key} className={`col ${key == activeIndex ? 'active' : null}`} onClick={() => this.changeItem(key)}>
                                            <img src={key == activeIndex ? x.iconActive:x.iconInActive} />
                                            <label>{x.title}</label>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="body">
                            <div className={`leftNav`}>
                                <div className="base-img">
                                    <img src={item.images[activeGalaryIndex - 1].url} />
                                </div>
                                <div className="galary">
                                    {
                                        item.images.map((img, idx) => {
                                            const k = idx + 1;
                                            return <img key={k} src={img.thumb || img.url} className={`${k == activeGalaryIndex ? 'active' : null}`} onClick={() => this.changeImage(k)} />
                                        })
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
                                <div className={`component row`}>
                                    <div className="item">
                                        <span>{item.title}&nbsp;:</span>
                                        <span>&nbsp;{item.subTitle}</span>
                                    </div>
                                    <div className="discription">
                                        <p>{item.discription}</p>
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
