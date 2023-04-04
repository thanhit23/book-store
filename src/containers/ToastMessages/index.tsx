import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { toast, ToastContainer } from 'react-toastify';

import { State, ToastAction } from './types';
import 'react-toastify/dist/ReactToastify.css';
import { resetMessage as resetMessageAction } from './actions';
import { TOAST_ERROR, TOAST_INFO, TOAST_SUCCESS } from './constants';

function Toast({ toast: { message, type }, resetMessage }: ToastAction) {
  useEffect(() => {
    type === TOAST_SUCCESS && toast.success(message);
    type === TOAST_ERROR && toast.error(message);
    type === TOAST_INFO && toast.info(message);
    const resetMes = message && setTimeout(() => resetMessage(), 7000);
    return () => {
      clearTimeout(resetMes);
    };
  }, [message]);

  return <ToastContainer />;
}

const mapDispatchToProps = (dispatch: any) => ({
  resetMessage: bindActionCreators(resetMessageAction, dispatch),
});

const mapStateToProps = (state: State) => {
  const {
    global: { toast },
  } = state;
  return {
    toast,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Toast);
