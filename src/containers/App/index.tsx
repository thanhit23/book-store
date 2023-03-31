import React from 'react';
import { useRoutes } from 'react-router-dom';

import './styles.css';
import routes from '../../routes';
import ToastMessages from '../ToastMessages';
import LoadingIndicator from '../LoadingIndicator';

function App() {
  return (
    <>
      <LoadingIndicator />
      <ToastMessages />
      {useRoutes(routes())}
    </>
  );
}

export default App;
