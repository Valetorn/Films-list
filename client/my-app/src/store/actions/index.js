import { normalize } from 'normalizr';

import { filmSchema } from '../../schema/index';

export const ACTION_GET_FILMS = 'ACTION_GET_FILMS';
export const ACTION_CHANGE_FILMS = 'ACTION_CHANGE_FILMS';

export const getFilms = (newFilms) => ({
    type: ACTION_GET_FILMS,
    payload: newFilms
});

export const changeFilms = (newData) => ({
    type: ACTION_CHANGE_FILMS,
    payload: newData
});

export const putStateToProps = (state) => ({
    items: state.items
});

export const fetchData = () => (dispatch) => {
    fetch('/films')
    .then(res => res.json())
    .then(res => normalize(res, [filmSchema]))
    .then(res => dispatch(getFilms(res)))
    .catch(err => console.log(err));
}

export const fetchUpdate = (data) => (dispatch) => {
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