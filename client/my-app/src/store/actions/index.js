export const ACTION_GET_FILMS = 'ACTION_GET_FILMS';

export const getFilms = (newFilms) => ({
    type: ACTION_GET_FILMS,
    payload: newFilms
});

export const putStateToProps = (state) => ({
    films: state.films
});

export const fetchData = () => (dispatch) =>{
    fetch('/films')
    .then(res => res.json())
    .then(res => dispatch(getFilms(res)))
    .catch(err => console.log(err));
}

export const putActionsToProps = {
    fetchData
}