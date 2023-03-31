import AddProductComponent from '../../../components/ProductAdd';
import { bindActionCreators, compose } from 'redux';
import { addProductRequest as addProductAction } from './actions';
import { isLoading } from '../../LoadingIndicator/actions';
import { connect } from 'react-redux';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';
import { HandleSubmitType, PropsAddProduct } from './types';

function AddProduct({ onSubmit }: PropsAddProduct) {
  const handleSubmitForm = (data: HandleSubmitType) => {
    onSubmit(data);
  };

  return <AddProductComponent onSubmit={handleSubmitForm} />;
}

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: bindActionCreators(addProductAction, dispatch),
  loading: bindActionCreators(isLoading, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'register', saga });

export default compose(withSaga, withConnect)(AddProduct);
