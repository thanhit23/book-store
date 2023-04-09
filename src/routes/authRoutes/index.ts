import Admin from '../../containers/Admin/ListProduct';
import AddProduct from '../../containers/Admin/AddProduct';
import ListComment from '../../containers/Admin/ListComment';
import EditProduct from '../../containers/Admin/ProductEdit';

export default [
  { path: '/admin', component: Admin, index: true },
  { path: '/admin/add-product', component: AddProduct, index: true },
  { path: '/admin/edit-product/:id', component: EditProduct, index: true },
  { path: '/admin/comment', component: ListComment, index: true },
];
