import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';

import saga from './saga';
import reducer from '../reducer';
import { Props, State } from './types';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import { getProductDetail as getProductDetailAction, updateProduct as updateProductAction } from './actions';
import ProductEditComponent from '../../../components/Admin/ProductEdit';

function ProductEdit({ getProductDetail, detail, updateProduct }: Props) {
  const { id = '' } = useParams();
  const redirect = useNavigate();
  const callback = () => redirect('/admin');

  useEffect(() => {
    getProductDetail(id);
  }, [id]);

  const handleSubmit = (data: object) => updateProduct(id, data, callback);

  const { discount, images, name, price, description } = detail;

  return (
    Object.keys(detail).length && (
      <ProductEditComponent onSubmit={handleSubmit} detail={{ discount, images, name, price, description }} />
    )
  );
}

const mapStateToProps = (state: State) => {
  const {
    admin: {
      product: { detail },
    },
  } = state;
  return {
    detail,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getProductDetail: bindActionCreators(getProductDetailAction, dispatch),
  updateProduct: bindActionCreators(updateProductAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
// @ts-ignore
const withReducer = injectReducer({ key: 'admin', reducer });
const withSaga = injectSaga({ key: 'register', saga });

export default compose(withSaga, withReducer, withConnect)(ProductEdit);
