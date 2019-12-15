let initialState = {
    list: [],
    assets: {},
    products:{},
    selectedProductId:1
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                list: action.data.products,
                assets:action.data.assets
            };
        case 'GET_PRODUCT_ASSETS_SUCCESS':
            return {
                ...state,
                assets: action.data
            };
        default:
            return { ...state };
    }
}