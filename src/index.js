import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBlock from './containers/app';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import comments from './reducers/comments';

const { Pool } = require('pg');

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});


const checkLocalStorage = () => {
  if (localStorage['comments']) {
    return JSON.parse(localStorage['comments'])
  } else {
    return []
  }
}

const store = createStore(comments, checkLocalStorage());

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
