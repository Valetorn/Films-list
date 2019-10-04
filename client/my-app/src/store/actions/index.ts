import { normalize } from 'normalizr';
import { Dispatch } from 'redux';

import { filmSchema } from '../../schema/index';
import { State, FilmsState, NormalizeData } from '../reducer/StateType';
import { ActionTypeState, ActionTypeFilm } from '../actions/ActionTypes';

export const ACTION_GET_FILMS = 'ACTION_GET_FILMS';
export const ACTION_CHANGE_FILMS = 'ACTION_CHANGE_FILMS';
export const ACTION_DATA_IS_LOADING = 'ACTION_DATA_IS_LOADING';

export const getFilms = (newFilms: State | NormalizeData): ActionTypeState => ({
    type: ACTION_GET_FILMS,
    payload: newFilms
});

export const changeFilms = (newData: FilmsState): ActionTypeFilm => ({
    type: ACTION_CHANGE_FILMS,
    payload: newData
});

export const putStateToProps = (state: State): State => ({
    items: state.items
});

export const fetchData = () => (dispatch: Dispatch): void => {
    fetch('/films')
    .then((res) => {
        if (!res.ok) {
            throw Error(res.statusText);
        }

        return res;
    })
    .then(res => res.json())
    .then(res => {
        const normalizeData: NormalizeData = normalize(res, [filmSchema]);
        return dispatch(getFilms(normalizeData));
    })
    .catch(err => console.log(err));
}

export const fetchUpdate = (data: FilmsState) => (): void => {
    fetch('/films/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(() => alert('Film updated!'))
        .catch(err => console.log(err));
}

export const putActionsToProps = {
    fetchData,
    changeFilms,
    fetchUpdate
}