import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import saga from './saga';
import reducer from './reducer';
import { Props } from './types';
import { getListProduct } from './actions';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import ProductList from '../../../components/ProductList';

function ListProduct({ getProduct, list }: Props) {
  useEffect(() => {
    getProduct();
  }, []);

  return list && <ProductList list={list} />;
}

const mapStateToProps = (state: any) => {
  const {
    product: { list },
  } = state;
  return {
    list,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getProduct: bindActionCreators(getListProduct, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'product', saga });
// @ts-ignore
const withReducer = injectReducer({ key: 'product', reducer });

export default compose(withReducer, withSaga, withConnect)(ListProduct);
