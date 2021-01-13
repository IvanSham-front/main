import React from 'react';

const CommentForm = (props) => {
    const { name, comment, addComment, onChangeComment, onChangeName } = props;

    // Придумать куда включать функцию addComment и changeName/changeComment
    return (
        <form className="comments-block__inputs" onSubmit={ev => addComment(name, comment)}>
            <input
                type="text" 
                value={name} 
                className="comments-block__input_name"
                placeholder="Введите Имя"
                required={true}
                onChange = {ev => onChangeName(ev.target.value)}
            />

            <textarea
                type="text"
                value={comment} 
                className="comments-block__input_comment" 
                placeholder="Ваш комментарий" 
                required={true}
                onChange={ev => onChangeComment(ev.target.value)}
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