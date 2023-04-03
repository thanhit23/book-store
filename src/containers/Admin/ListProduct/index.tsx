import Header from '../../Header';
import Navigation from '../../../components/Admin/Navigation';
import ProductList from '../../../components/Admin/ProductList';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { getListProduct as getListProductAction, deleteProduct as deleteProductAction } from './actions';
import { useEffect } from 'react';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../reducer';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';
import { Props, State } from './types';

function ListProduct({ getListProduct, list, deleteProduct }: Props) {
  useEffect(() => {
    getListProduct();
  }, []);

  const handleDeleteProduct = (id: string) => deleteProduct(id);

  return (
    <>
      <Header />
      <Navigation />
      <div className="mt-3">
        <div className="max-w-7xl mx-auto px-4">
          {list && <ProductList listProduct={list} deleteProduct={handleDeleteProduct} />}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: State) => {
  const {
    admin: {
      product: { list },
    },
  } = state;
  return {
    list,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getListProduct: bindActionCreators(getListProductAction, dispatch),
  deleteProduct: bindActionCreators(deleteProductAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
// @ts-ignore
const withReducer = injectReducer({ key: 'admin', reducer });
const withSaga = injectSaga({ key: 'product', saga });

export default compose(withReducer, withSaga, withConnect)(ListProduct);
