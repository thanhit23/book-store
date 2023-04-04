import Admin from '../../containers/Admin/ListProduct';
import AddProduct from '../../containers/Admin/AddProduct';
import ListComment from '../../containers/Admin/ListComment';

export default [
  { path: '/admin', component: Admin, index: true },
  { path: '/admin/add-product', component: AddProduct, index: true },
  { path: '/admin/comment', component: ListComment, index: true },
];
