import React from 'react';
import ReactDOM from 'react-dom';
import CommentsItem from './comments-item';


class CommentsBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comment: '',
      comments: [

      ],
    }

    const json = JSON.parse(localStorage.getItem('comments'));
    const comments = this.state.comments;
    
    if (json) {
      for (let i in json) {
        comments.push(json[i])
      }
    }

  }

  addComment() {
    const comments = this.state.comments;
    if (this.state.name && this.state.comment) {
      const options = { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'};
      comments.push({
        name: this.state.name,
        comment: this.state.comment,
        date: new Date().toLocaleString('ru', options)
      });
      const json = JSON.stringify(this.state.comments);
      localStorage.setItem('comments', json);
    }

    this.setState({comments});
    this.setState({name: ''})
    this.setState({comment: ''});
  }

  deleteComment(i) {
    const comments = this.state.comments;
    comments.splice(i, 1);
    this.setState({comments});
    let json = JSON.stringify(this.state.comments);
    localStorage.setItem('comments', json);
  }

  render() {
    return (
      <aside className="comments-block">
        <h1 className="comments-block__title">Комментарии</h1>
           <div className="comments-block__inputs">
              <input
                type="text" 
                value={this.state.name} 
                className="comments-block__input_name"
                placeholder="Введите Имя"
                required={true}
                onChange = {ev => {
                  this.setState({ name: ev.target.value})  
                }}
              />

              <textarea
                value={this.state.comment} 
                className="comments-block__input_comment" 
                placeholder="Ваш комментарий" 
                required={true}
                onChange = {ev => {
                  this.setState({ comment: ev.target.value})  
                }}
              />
              <button 
                type="button" 
                className="comments-block__btn-add"
                onClick={ev => this.addComment()}  
                >
                  Добавить комментарий
              </button> 
            </div> 
        

        <ul className="comments-block__ul">
          { 
            this.state.comments.map((props, i) => {
              return (
                <CommentsItem
                  key={i}
                  name={this.state.comments[i].name}
                  comment={this.state.comments[i].comment}
                  date={this.state.comments[i].date}
                  deleteComment={this.deleteComment.bind(this, i)}
                  />
              );
            })

          }
        </ul>
      </aside>
    );
  };
};

export default CommentsBlock;
