import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { useNavigate, useParams } from 'react-router-dom';

import saga from './saga';
import { Props } from './types';
import Header from '../../Header';
import reducer from '../List/reducer';
import {
  getListProduct,
  commentProduct as commentProductAction,
  getListComment as getListCommentAction,
  commentEdit as editCommentAction,
} from './actions';
import Comment from '../../../components/Comment';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import ProductDetailComponent from '../../../components/ProductDetail';
import Footer from '../../../components/Footer';

function ProductDetail({ getProduct, detail, auth, comment, commentProduct, getListComment, editComment }: Props) {
  const { id = '' } = useParams();
  const redirect = useNavigate();
  const callback = () => getListComment(id);

  useEffect(() => {
    getProduct(id);
    getListComment(id);
  }, []);

  const handleAddComment = (data: object) => {
    if (!auth) return redirect('/login');
    commentProduct({ ...data, userId: auth?._id, bookId: id }, callback);
  };

  const handleEditComment = (idComment: string, data: object) => {
    if (!auth) return redirect('/login');
    editComment(idComment, { ...data, userId: auth?._id, bookId: id }, callback);
  };

  return (
    <div>
      <Header />
      <ProductDetailComponent product={detail} />
      <Comment onSubmitEdit={handleEditComment} onSubmit={handleAddComment} listComment={comment} user={auth?._id} />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  const {
    product: { detail, comment },
    global: { auth },
  } = state;
  return {
    comment,
    detail,
    auth,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getProduct: bindActionCreators(getListProduct, dispatch),
  commentProduct: bindActionCreators(commentProductAction, dispatch),
  getListComment: bindActionCreators(getListCommentAction, dispatch),
  editComment: bindActionCreators(editCommentAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'product', saga });
// @ts-ignore
const withReducer = injectReducer({ key: 'product', reducer });

export default compose(withReducer, withSaga, withConnect)(ProductDetail);
