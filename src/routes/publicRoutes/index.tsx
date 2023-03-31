import HomePage from '../../containers/Home';
import LoginPage from '../../containers/Login';
import Register from '../../containers/Register';
import ProductDetail from '../../containers/Product/Detail';

export default [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <Register /> },
  { path: '/product/:id', element: <ProductDetail /> },
];
