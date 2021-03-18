import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBlock from './containers/app';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import comments from './reducers/comments';

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();


//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//простой тест сервера
app.get('/ping', function (req, res) {
 return res.send('pong');
});

//обслуживание html
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
 

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
