import { bindActionCreators, compose } from 'redux';
import { sendRequestToken } from '../Authenticated/actions';
import { connect } from 'react-redux';
import injectSaga from '../../utils/injectSaga';
import saga from '../Authenticated/saga';
import { States } from '../Authenticated/types';
import { useEffect } from 'react';
import { Props } from './types';

function MainLayout({ children, onSendToken }: Props) {
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      onSendToken(token);
    }
  }, []);

  return children;
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
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'authenticated', saga });

export default compose(withSaga, withConnect)(MainLayout);
