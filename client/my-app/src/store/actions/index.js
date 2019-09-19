export const ACTION_GET_FILMS = 'ACTION_GET_FILMS';

export const getFilms = (newFilms) => ({
    type: ACTION_GET_FILMS,
    payload: newFilms
});