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

  return (
    <div className="mt-4 flex items-center justify-center flex-col">
      <h2 className="text-xl font-bold">Product</h2>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {list && <ProductList list={list} />}
      </section>
    </div>
  );
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
