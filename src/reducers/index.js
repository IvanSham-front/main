import {combineReducers} from 'redux';

import comment from './comment';
import name from './name';
import comments from './comments';


const allReducers = combineReducers ({
    name,
    comment,
    comments,
})

export default allReducers;