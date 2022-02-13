import React from 'react';
import ReactDOM from 'react-dom';
import CommentsItem from './comments-item';
import CommentForm from './CommentForm';


class CommentsBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comment: '',
      comments: [
      ],

    }
    
    
    
    window.onload = () => {
      fetch('http://localhost:8081')
      .then(responce => responce.json())
      .then(data => {
        console.log(data);
        const comments = []
        for (let i in data) {
          comments.push(data[i])
        }
        this.setState({
          comments:comments
        })
      })
    }
  
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeComment(event) {
    this.setState({comment: event.target.value});
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

  addComment(event) {
    event.preventDefault()
    const comments = this.state.comments;
    if (this.state.name && this.state.comment) {
      const options = { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'};
      comments.push({
        id: this.getRandomInt(1000),
        name: this.state.name,
        comment: this.state.comment,
        date: new Date().toLocaleString('ru', options)
      });
      fetch('http://localhost:8081/comments_table', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          comments[comments.length - 1].id, 
          comments[comments.length - 1].name, 
          comments[comments.length - 1].comment,
          comments[comments.length - 1].date
          )
      })
      .then(responce => console.log(responce))
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

        <CommentForm
          name={this.state.name}
          comment={this.state.comment}
          handleChangeName={this.handleChangeName.bind(this)}
          handleChangeComment={this.handleChangeComment.bind(this)}
          addComment={this.addComment.bind(this)}
        />

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
