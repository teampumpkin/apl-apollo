import { connect } from 'react-redux';
import MainContainer from './index';
import { getProductsAction ,getProductAssetsAction} from '../../actions/products';

const mapStateToProps = state => {
  return {
    productReducer: state.productReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProductsAction());
    },
    getAssets:(productId)=>{
      dispatch(getProductAssetsAction(productId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)