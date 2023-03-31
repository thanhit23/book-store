import { useMutation } from 'react-query';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import saga from './saga';
import reducer from '../App/reducer';
import { login, formType } from './types';
import { isLoading } from '../LoadingIndicator/actions';
import LoginPage from '../../components/Login';
import injectSaga from '../../utils/injectSaga';
import { login as loginAction } from './actions';
import injectReducer from '../../utils/injectReducer';

function Login({ onLogin, loading }: login) {
  const redirect = useNavigate();
  const callback = () => redirect('/');

  const { mutate, isLoading } = useMutation({
    // @ts-ignore
    mutationFn: (body: formType) => {
      onLogin({ ...body, callback });
    },
  });

  const handleSubmit = (data: object) => {
    loading(isLoading);
    mutate(data);
  };

  return <LoginPage onSubmit={handleSubmit} />;
}

const mapStateToProps = (state: any) => {
  const {
    global: { auth },
  } = state;
  return {
    auth,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onLogin: bindActionCreators(loginAction, dispatch),
  loading: bindActionCreators(isLoading, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'login', saga });
// @ts-ignore
const withReducer = injectReducer({ key: 'global', reducer });

export default compose(withReducer, withSaga, withConnect)(Login);
