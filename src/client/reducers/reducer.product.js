let initialState = {
    list: [],
    assets: {},
    selectedProductId:1
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                list: action.data
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