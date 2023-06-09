import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import saga from './saga';
import { States, Props } from './types';
import injectSaga from '../../utils/injectSaga';
import { sendRequestToken, redirectLogin } from './actions';

function Authenticated({ auth, children, onSendToken, notToken }: Props) {
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      onSendToken(token);
    } else {
      notToken();
    }
  }, []);

  if (token && auth?.admin) return children;
}

const mapStateToProps = (state: States) => {
  const {
    global: { auth },
  } = state;
  return {
    auth,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSendToken: bindActionCreators(sendRequestToken, dispatch),
  notToken: bindActionCreators(redirectLogin, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'authenticated', saga });

export default compose(withSaga, withConnect)(Authenticated);
