import {combineReducers} from 'redux';

const GET_TODO = 'GET_TODO';
const GET_TODO_COMPLETE = 'GET_TODO_COMPLETE';
export const CREATE_TODO = 'CREATE_TODO';
export const ADD_POST = 'ADD_POST';

const data = (state = {}) => {
    return state;
};

const todo = (state = [], action) => {
    switch(action.type) {
        case CREATE_TODO:
            return [
                action.payload,
                ...state
            ];
        default:
            return state;
    }
};

const reddit = (state = [
    {name: "shubham"},
    {name: "burman"}
], action) => {
    switch (action.type) {
        case GET_TODO:
            return state;
            break;
        case GET_TODO_COMPLETE:
            return action.payload;
            break;
        case ADD_POST:
            return [
                action.payload,
                ...state
            ];
            break;
        default:
            return state;
    }
};

export const reducer = combineReducers({reddit, todos: todo, data} );