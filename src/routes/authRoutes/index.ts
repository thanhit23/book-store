import AddProduct from '../../containers/Admin/AddProduct';
import Admin from '../../containers/Admin/ListProduct';

export default [
  { path: '/admin/add-product', component: AddProduct, index: true },
  { path: '/admin', component: Admin, index: true },
];
