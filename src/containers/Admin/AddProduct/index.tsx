import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import saga from './saga';
import injectSaga from '../../../utils/injectSaga';
import { isLoading } from '../../LoadingIndicator/actions';
import { HandleSubmitType, PropsAddProduct } from './types';
import AddProductComponent from '../../../components/ProductAdd';
import { addProductRequest as addProductAction } from './actions';
import { useNavigate } from 'react-router-dom';

function AddProduct({ onSubmit }: PropsAddProduct) {
  const redirect = useNavigate();
  const callback = () => redirect('/admin');
  const handleSubmitForm = (data: HandleSubmitType) => onSubmit(data, callback);

  return <AddProductComponent onSubmit={handleSubmitForm} />;
}

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: bindActionCreators(addProductAction, dispatch),
  loading: bindActionCreators(isLoading, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'register', saga });

export default compose(withSaga, withConnect)(AddProduct);
