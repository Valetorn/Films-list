import { ACTION_GET_FILMS, ACTION_CHANGE_FILMS } from '../actions/index.js';

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
        case ACTION_CHANGE_FILMS:
            const newState = { ...state };
            const filmId = action.payload._id;
            newState.items.entities.films[filmId] = action.payload;
            return newState;
        default:
            return state;
    }
}