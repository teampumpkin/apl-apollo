import React, { Component } from 'react';
import style from './product.scss';
const images = require.context('../../assets/', true);
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
        // this.props.getAssets(this.props.match.params.category)
    }
    componentWillMount(){
        const category =  this.props.match.params.category ? this.props.match.params.category.replace(/\-/g,'').toLocaleLowerCase() : null;
        const { assets } = this.props.productReducer;
        if (assets[category] && Object.keys(assets[category]).length > 0) {
            this.setState({data:assets[category]})
        }else{
            this.props.getProducts();
        }
    }

    componentWillReceiveProps(nextProps) {
        const category =  this.props.match.params.category ? this.props.match.params.category.replace(/\-/g,'').toLocaleLowerCase() : null;
        const { assets } = nextProps.productReducer;
        if (assets[category] && Object.keys(assets[category]).length > 0) {
            this.setState({data:assets[category]})
        }
    }
    changeItem = (key) => {
        this.setState({activeIndex:key})
    }
    changeImage = (key) => {
        this.setState({activeGalaryIndex:key})
    }
    getImage = (img) =>{
        return img && img !=null ? images('./' + img):null;
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
                                            <img src={key == activeIndex ? this.getImage(x.iconActive):this.getImage(x.iconInActive)} />
                                            <label>{x.title}</label>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="body">
                            <div className={`leftNav`}>
                                <div className="base-img">
                                    {item.assets[activeGalaryIndex - 1] && item.assets[activeGalaryIndex - 1].url ? <img src={this.getImage('images/'+item.assets[activeGalaryIndex - 1].url)} />:null}
                                </div>
                                <div className="galary">
                                    {
                                        item.assets.map((img, idx) => {
                                            const k = idx + 1;
                                            return <img key={k} src={img && img.url ? this.getImage(`images/${img.url}`):null} className={`${k == activeGalaryIndex ? 'active' : null}`} onClick={() => this.changeImage(k)} />
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
