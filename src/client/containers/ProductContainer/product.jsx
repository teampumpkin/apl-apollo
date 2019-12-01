import React, { Component } from 'react';
import style from './product.scss';
import {Container,Row,Col} from 'react-bootstrap';
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
        return (
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        );
    }
}
