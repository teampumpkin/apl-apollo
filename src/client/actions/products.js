import axios from 'axios';
const moke = require('../../../moke.json');
const walkthrough = require('../../../walkthrough.json');
function requestProducts() {
    return {
        type: 'REQUEST_PRODUCTS'
    };
}

function getProductsSuccess(data) {
    return {
        type: 'GET_PRODUCTS_SUCCESS',
        data
    };
}

function getProductsFailure(errorMessage) {
    return {
        type: 'GET_PRODUCTS_FAILURE',
        errorMessage
    };
}

export function getProductsAction() {
    return (dispatch, getState) => {
        // let assets = {};
        // let products = [];
        // walkthrough.map(x=>{
        //     let y = JSON.parse(JSON.stringify(x));
        //     assets[x.name.replace(/\s/g,'').toLocaleLowerCase()] = x;
        //     delete y.items;
        //     products.push(y);
        // })
        // dispatch(getProductsSuccess({assets:assets,products:products}));
        // return {assets:assets,products:products};
        dispatch(requestProducts());
        return axios.get('/api/products')
            .then(response => {
                if (response.data.success == true) {
                    dispatch(getProductsSuccess(response.data.data));
                } else {
                    dispatch(getProductsFailure(response.errorMessage));
                }
            }).catch((errorMessage) => {
                dispatch(getProductsFailure(errorMessage))
            })
    }
};

function requestProductAssets() {
    return {
        type: 'REQUEST_PRODUCT_ASSETS'
    };
}

function getProductAssetsSuccess(data) {
    return {
        type: 'GET_PRODUCT_ASSETS_SUCCESS',
        data
    };
}

function getProductAssetsFailure(errorMessage) {
    return {
        type: 'GET_PRODUCT_ASSETS_FAILURE',
        errorMessage
    };
}

export function getProductAssetsAction(id) {
    return (dispatch, getState) => {
        return axios.get(`/api/product/${id}`).then(response => {
            if (response.data.success == true) {
                dispatch(getProductAssetsSuccess(response.data.data));
            } else {
                dispatch(getProductAssetsFailure(response.errorMessage));
            }
        }).catch((errorMessage) => {
            dispatch(getProductAssetsFailure(errorMessage))
        })
    }
};