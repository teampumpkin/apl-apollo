import React, { Component } from 'react';
import style from './product.scss';
export default class Product extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            MAP: [
                { name: "2", shape: "circle", coords: [1055, 0, 0, 592], name: "ROW HOUSES", isActive: false, marker: "Group19.png", expandIcon: "arrow-right-circle.png" },
            ]
        }
    }

    render() {
        console.log("=======>", this.props)
        return (
            <div className="conatiner" >
                <div className="card">
                    <div className="header">
                        <div className="row">
                            <div className="col">
                                <img src="/assets/1920/product-1920-20.svg" />
                                <label>BUILD</label>
                            </div>
                            <div className="col active">
                                <img src="/assets/1920/product-1920-21.svg" />
                                <label>COSTGARD</label>
                            </div>
                            <div className="col">
                                <img src="/assets/1920/product-1920-15.svg" />
                                <label>FIRE-READY</label>
                            </div>
                            <div className="col">
                                <img src="/assets/1920/product-1920-16.svg" />
                                <label>ELEGENT</label>
                            </div>
                            <div className="col active">
                                <img src="/assets/1920/product-1920-17.svg" />
                                <label>CHAUKHAT</label>
                            </div>
                            <div className="col">
                                <img src="/assets/1920/product-1920-18.svg" />
                                <label>SIGNETURE</label>
                            </div>
                            <div className="col">
                                <img src="/assets/1920/product-1920-19.svg" />
                                <label>STANDERD</label>
                            </div>
                            <div className="col">
                                <img src="/assets/1920/product-1920-19" />
                                <label>STANDERD</label>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="leftNav">
                            <div className="base-img">
                                <img src="/assets/1920/product-7.png" />
                            </div>
                            <div className="galary">
                                <img className="active" src="/assets/1920/product-7.png" />
                                <img src="/assets/1920/product-8.png" />
                                <img src="/assets/1920/product-9.png" />
                                <img src="/assets/1920/product-10.png" />
                            </div>
                        </div>
                        <div className="rightNav">
                            <div className="row">
                                <div className="head title">
                                    <span> Row </span><span>Houses</span>
                                </div>
                                <p className="discription">
                                    Developers in the senior housing industry depend on Zekelman Industries for a wide range of steel products and construction services.
                                    We can use traditional or modular methods to help build housing communities of any size, complete with critical systems that are color-coded for quick identification. Our logistics and design-build experts help keep projects on track from start to finish.</p>
                            </div>
                            <div className="component row">
                                <div className="item">
                                    <span>Plank&nbsp;:</span>
                                    <span>&nbsp;Developers in the senior housing industry d</span>
                                </div>
                               <div className="discription"> 
                                 <p>
                                    Steel Tube that is covered with a layer of zinc metal is known as Galvanised steel. During the process of galvanising, steel is immersed in a molten zinc bath to ensure a tough and uniform barrier. These Galvanised steel pipes and tubes, are used in water supply, structural applications etc. In order to seek long-term structural performance in the harshest of weather conditions, designers, builders and consumers have turned to using zinc-coated steel pipes. This is because zinc-coated galvanised steel pipes and tube resist the attack of wind, water and road salts. Apart from being easy on the pocket GI pipes are highly corrosion resistant, light in weight, easy to handle during transport and easy to join.
                                </p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
