import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import saga from './saga';
import reducer from '../reducer';
import Header from '../../Header';
import { Props, State } from './types';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import Navigation from '../../../components/Admin/Navigation';
import CommentList from '../../../components/Admin/CommentList';
import { deleteComment as deleteCommentAction, getListComment as getListCommentAction } from './actions';

function ListComment({ list, getListComment, deleteComment }: Props) {
  useEffect(() => {
    getListComment();
  }, []);
  const handleDeleteComment = (id: string) => deleteComment(id);
  return (
    <>
      <Header />
      <Navigation />
      <div className="mt-3">
        <div className="max-w-7xl mx-auto px-4">
          <CommentList listComment={list} deleteComment={handleDeleteComment} />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: State) => {
  const {
    admin: {
      comment: { list },
    },
  } = state;
  return {
    list,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getListComment: bindActionCreators(getListCommentAction, dispatch),
  deleteComment: bindActionCreators(deleteCommentAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
// @ts-ignore
const withReducer = injectReducer({ key: 'admin', reducer });
const withSaga = injectSaga({ key: 'product', saga });

export default compose(withReducer, withSaga, withConnect)(ListComment);
