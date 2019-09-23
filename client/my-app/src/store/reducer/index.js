import { ACTION_GET_FILMS } from '../actions/index.js';

const initialState = {
    items: {
        entities: { 
          films: {},
          actors: {}
        }
    }
}
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_GET_FILMS:
            return {...state, items: action.payload}
        default:
            return state;
    }
}