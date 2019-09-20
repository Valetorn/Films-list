import { ACTION_GET_FILMS } from '../actions/index.js';

const initialState = {
    films: {}
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_GET_FILMS:
            return {...state, films: action.payload}
        default:
            return state;
    }
}