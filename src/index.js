import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBlock from './containers/app';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import comments from './reducers/comments';

const store = createStore(comments, JSON.parse(localStorage['comments']))

store.subscribe(() => {
  localStorage['comments'] = JSON.stringify(store.getState())
})

ReactDOM.render(
  <React.StrictMode>
    <CommentBlock store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
