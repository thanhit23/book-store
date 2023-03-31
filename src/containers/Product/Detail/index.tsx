import ProductDetailComponent from '../../../components/ProductDetail';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { useParams } from 'react-router-dom';
import { getListProduct } from './actions';
import { useEffect } from 'react';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';
import { Props } from './types';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../List/reducer';

function ProductDetail({ getProduct, detail }: Props) {
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, []);

  return <ProductDetailComponent product={detail} />;
}

const mapStateToProps = (state: any) => {
  const {
    product: { detail },
  } = state;
  return {
    detail,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getProduct: bindActionCreators(getListProduct, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'product', saga });
// @ts-ignore
const withReducer = injectReducer({ key: 'product', reducer });

export default compose(withReducer, withSaga, withConnect)(ProductDetail);
