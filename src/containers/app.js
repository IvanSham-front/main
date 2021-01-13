import React from 'react';
import {connect} from 'react-redux'

import CommentsItem from '../components/CommentsItem';
import CommentForm from '../components/CommentForm';
import { addComment, deleteComment, onChangeName, onChangeComment } from '../actions/actions'


let CommentBlock = (props) => {
    const {addComment, deleteComment, onChangeName, onChangeComment,
      name, comment, comments
    } = props
    return(
        <aside className="comments-block">
        <h1 className="comments-block__title">Комментарии</h1>

        <CommentForm
          name={name}
          comment={comment}
          comments={comments}
          addComment={addComment}
          onChangeComment={onChangeComment}
          onChangeName={onChangeName}
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

const mapDispachToProps = (dispatch) => {
  return {
    addComment: (name, comment) => dispatch(addComment(name, comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    onChangeName: (name) => dispatch(onChangeName(name)),
    onChangeComment: (comment) => dispatch(onChangeComment(comment))
  }
}

CommentBlock = connect(
  mapStateToProps,
  mapDispachToProps
)(CommentBlock);

export default CommentBlock;