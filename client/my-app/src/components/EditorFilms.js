import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { putStateToProps, putActionsToProps } from '../store/actions/index';

const EditorFilms = (props) => {
    const { items, changeFilms, fetchUpdate } = props;

    const id = props.match.params.id;
    const film = { ...items.entities.films[id] };

    const handleChange = (event) => {
        let target = event.target;
        
        target.name === 'film' ? (film.name = target.value) : (film.year = target.value);
    
        changeFilms(film);
    }

    const postEditedData =  (event) => {
        event.preventDefault();

        const inputName = document.querySelector('#film');
        const inputYear = document.querySelector('#year');

        film.name = inputName.value;
        film.year = inputYear.value;

        fetchUpdate(film);
    };

    return (
        <form action="#" className='editor' onSubmit={postEditedData}>
            <Link to='/' className='back'>Back</Link>

            <h1 className='editor__title'>Editor:</h1>

            <div className='editor__wrapper'>
                <div className='editor__input-container'>
                    <label htmlFor="film" className='editor__label'>Film's name: </label>
                    <input type="text" id='film' name='film' className='editor__input' placeholder={film.name} onChange={handleChange} />
                </div>

                <div className='editor__input-container'>
                    <label htmlFor="year" className='editor__label'>Film's year: </label>
                    <input type="text" id='year' name='year' className='editor__input' placeholder={film.year} onChange={handleChange} />
                </div>
            </div>

            <button type='submit'>Submit</button>
        </form>  
    ) 
};

export default connect(putStateToProps, putActionsToProps)(EditorFilms);