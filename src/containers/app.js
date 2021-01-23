import React from 'react';
import {connect} from 'react-redux'

import CommentsItem from '../components/CommentsItem';
import CommentForm from '../components/CommentForm';
import { addComment, deleteComment } from '../actions/actions'

let CommentBlock = (props) => {
    const { addComment, comments, deleteComment } = props
   
    return(
        <aside className="comments-block">
        <h1 className="comments-block__title">Комментарии</h1>

        <CommentForm
          addComment={addComment}
        />

        <CommentsItem
          comments={comments}
          deleteComment={deleteComment}
        />
      </aside>
    )

}

const mapStateToProps = (state) => {
  return {
    comments: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (name, comment) => dispatch(addComment(name, comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

CommentBlock = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBlock);

export default CommentBlock;