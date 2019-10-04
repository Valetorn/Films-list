import { ACTION_GET_FILMS, ACTION_CHANGE_FILMS } from '../actions/index';
import { State } from '../reducer/StateType';
import { ActionType } from '../actions/ActionTypes';

const initialState: State = {
    items: {
        entities: { 
          films: {},
          actors: {}
        },
        dataIsLoading: false,
        result: []
    }
}
export const reducer = (state = initialState, action: ActionType): any => {
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