import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { Props } from './types';
import { Logout } from './actions';
import HeaderComponent from '../../components/Header';

function Header({ auth, logout }: Props) {
  const handleLogout = () => logout();
  return <HeaderComponent auth={auth} logout={handleLogout} />;
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
  logout: bindActionCreators(Logout, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Header);
