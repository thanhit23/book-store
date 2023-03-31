import { bindActionCreators, compose } from 'redux';
import { Logout } from './actions';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/Header';
import { Props } from './types';

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
