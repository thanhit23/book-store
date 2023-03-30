import React from 'react';
import { useRoutes } from 'react-router-dom';

import './styles.css';
import routes from '../../routes';
import LoadingIndicator from '../LoadingIndicator';
import ToastMessages from '../ToastMessages';

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
