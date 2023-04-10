import clx from 'classnames';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
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
import Footer from '../../../components/Footer';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import ProductDetailComponent from '../../../components/ProductDetail';
import ReviewProductDetail from '../../../components/ReviewProductDetail';
import DescriptionProductDetail from '../../../components/DescriptionProductDetail';

function ProductDetail({ getProduct, detail, auth, comment, commentProduct, getListComment, editComment }: Props) {
  const { id = '' } = useParams();
  const redirect = useNavigate();
  const callback = () => getListComment(id);
  const [isReview, setIsReview] = useState(true);

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

  const handleIsReview = (isReviews: boolean) => setIsReview(isReviews);

  return (
    <div>
      <Header />
      <ProductDetailComponent product={detail} />
      <div className="py-20 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden">
        <div className="container px-4 mx-auto ">
          <div className="p-5 shadow-[rgba(43,52,69,0.1)_0px_4px_16px] rounded-t-8xl rounded-b-5xl bg-white">
            <div className="mb-3 flex">
              <button
                type="button"
                className={clx('text-2xl border-solid border-orange-600', { 'border-b': isReview })}
                onClick={() => handleIsReview(true)}
              >
                Review
              </button>
              <button
                type="button"
                className={clx('text-2xl border-solid border-orange-600 ml-5', { 'border-b': !isReview })}
                onClick={() => handleIsReview(false)}
              >
                Description
              </button>
            </div>
            {isReview ? (
              <ReviewProductDetail
                onSubmitEdit={handleEditComment}
                onSubmit={handleAddComment}
                listComment={comment}
                user={auth?._id}
              />
            ) : (
              <DescriptionProductDetail detail={detail} />
            )}
          </div>
        </div>
      </div>
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
