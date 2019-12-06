import axios from 'axios';
const moke = require('../../../moke.json');
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
        dispatch(requestProductAssets());
        dispatch(getProductAssetsSuccess(moke))
        return moke;
        // return axios.get(`/api/product/assets/${id}`).then(response => {
        //     if (response.data.success == true) {
        //         const state = getState();
        //         let assets = state.productReducer.assets;
        //         assets[id] = response.data.data
        //         dispatch(getProductAssetsSuccess(assets));
        //     } else {
        //         dispatch(getProductAssetsFailure(response.errorMessage));
        //     }
        // }).catch((errorMessage) => {
        //     dispatch(getProductAssetsFailure(errorMessage))
        // })
    }
};