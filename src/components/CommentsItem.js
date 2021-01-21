import React from 'react' ;


const CommentsItem = (props) => {
    const { comments , deleteComment } = props;

    return(

        <ul className="comments-block__ul">
        { 
          comments.map((comment => {
            return (
              <li className="comments-block__li" key={comment.id}>
                  <div>
                      <span className="comments-block__name-author">{comment.userName}</span>
                      <p className="comments-block__name-comment">{comment.comment}</p>
                  </div>
      
                  <div>
                      <span className="comments-block__date-comment">
                      {comment.date}
                      </span>
                      <button
                      className="comments-block__btn-close"
                      onClick={() => deleteComment(comment.id)}
                      title="Удалить комментарий"
                      >
                      X
                      </button>
                  </div>
               </li>
            );
          }))
        }
      </ul>

    )
}

export default CommentsItem;