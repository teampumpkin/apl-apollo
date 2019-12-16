import React, { Component } from 'react';
import loadable from '@loadable/component';
import style from './product.scss';
const Layout1 = loadable(() =>
    import(/* webpackPrefetch: true *//* webpackChunkName: "Layout1" */'../../components/layout1/index'),
)
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state ={data:{}};
        this.props.getAssets(this.props.match.params.category)
    }
    componentWillReceiveProps(nextProps) {
        const { assets } = nextProps.productReducer;
        if (assets && Object.keys(assets).length > 0) {
            this.setState({ data: assets })
        }
    }
    getLayout(data) {
        if (data && data.layout) {
            switch (data.layout) {
                case 'layout1':
                    return <Layout1 data={data} />;
                default:
                    return null;
            }
        }
    }
    render() {
        const { data } = this.state;
        return (
            <>
                {data && Object.keys(data).length > 0 ? this.getLayout(data) : null}
            </>
        );
    }
}
