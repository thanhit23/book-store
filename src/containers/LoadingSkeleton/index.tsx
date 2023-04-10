import { compose } from 'redux';
import { connect } from 'react-redux';

import { Props, States } from './types';
import Loadings from '../../components/Loading';

function LoadingSkeleton({ showLoading, children }: Props) {
  return showLoading ? children : <></>;
}

const mapStateToProps = (state: States) => {
  const {
    global: {
      loading: { showLoading },
    },
  } = state;

  return {
    showLoading,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(LoadingSkeleton);
