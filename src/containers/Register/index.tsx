import { connect } from 'react-redux';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';

import saga from './saga';
import { TypeAction } from './types';
import { formType } from '../Login/types';
import injectSaga from '../../utils/injectSaga';
import { register as registerAction } from './actions';
import { isLoading } from '../LoadingIndicator/actions';
import RegisterComponent from '../../components/Register';

function Register({ onSubmit, loading }: TypeAction) {
  const redirect = useNavigate();
  const callback = () => redirect('/login');

  const { mutate, isLoading } = useMutation({
    // @ts-ignore
    mutationKey: 'register',
    mutationFn: (body: formType) => {
      onSubmit(body, callback);
    },
  });

  const handleSubmit = (data: object) => {
    loading(isLoading);
    mutate(data);
  };

  return <RegisterComponent onSubmit={handleSubmit} />;
}

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: bindActionCreators(registerAction, dispatch),
  loading: bindActionCreators(isLoading, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'register', saga });

export default compose(withSaga, withConnect)(Register);
