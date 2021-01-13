import React from 'react' ;


const CommentsItem = (props) => {
    const { comments, deleteComment } = props;

    return(

        <ul className="comments-block__ul">
        { 
          comments.map(props => {
            return (
                <li className="comments-block__li" key={comments.id}>
                    <div>
                        <span className="comments-block__name-author">{comments.name}</span>
                        <p className="comments-block__name-comment">{comments.comment}</p>
                    </div>
        
                    <div>
                        <span className="comments-block__date-comment">
                        {props.date}
                        </span>
                        <button
                        className="comments-block__btn-close"
                        onClick={ev => deleteComment(comments.id)}
                        title="Удалить комментарий"
                        >
                        X
                        </button>
                    </div>
                 </li>
            );
          })
        }
      </ul>

    )
}

export default CommentsItem;