import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBlock from './containers/app';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import allReducers from './reducers';


//Создать 3 редюсера для каждого состояния 
const initialState = {
  name: '',
  comment: '',
  comments: []
}
 


const store = createStore(allReducers, initialState)

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
