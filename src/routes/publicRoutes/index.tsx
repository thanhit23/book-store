import HomePage from '../../containers/Home';
import LoginPage from '../../containers/Login';
import Register from '../../containers/Register';

export default [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <Register /> },
];
