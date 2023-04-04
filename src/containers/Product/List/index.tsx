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
    <div className="container mx-auto">
      <div className="my-20">
        <div className="shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded py-8">
          <div className="p-10 pt-0">
            <h2 className="text-xl font-bold">Product</h2>
          </div>
          <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-6 mb-10">
            {list && <ProductList list={list} />}
          </div>
        </div>
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
