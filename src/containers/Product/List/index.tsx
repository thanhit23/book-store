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
    <div className="my-20 flex items-center justify-center flex-col">
      <div className="shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] w-[1200px] rounded">
        <div className="p-10">
          <h2 className="text-xl font-bold">Product</h2>
        </div>
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-4 mb-10">
          {list && <ProductList list={list} />}
        </section>
      </div>
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
