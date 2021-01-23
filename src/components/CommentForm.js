import React from 'react';

const CommentForm = (props) => {
    const { addComment, updateLocalStorage } = props;
    return (
        <form className="comments-block__inputs"
            onSubmit={(e) => {
                e.preventDefault();
                const name = document.querySelector('#userName');
                const comment = document.querySelector('#userComment');
                addComment(name.value, comment.value);
                name.value = '';
                comment.value = '';
                }
            }
        >
           
            <input
                type="text" 
                id='userName'
                className="comments-block__input_name"
                placeholder="Введите Имя"
                required={true}
            />

            <textarea
                type="text"
                id="userComment"
                className="comments-block__input_comment" 
                placeholder="Ваш комментарий" 
                required={true}
            />

            <button 
                type="submit" 
                className="comments-block__btn-add"
            >
                Добавить комментарий
            </button> 
      </form> 
    )
}

export default CommentForm;