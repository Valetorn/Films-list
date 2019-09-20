import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFilms, putStateToProps, putActionsToProps } from '../store/actions/index';

const Films = (props) => {
    const { films, getFilms } = props;

    useEffect(() => {
        fetch('/films')
            .then(res => res.json())
            .then(data => getFilms(data))
            .catch(err => console.log(err));
    });

    return (
        <table className='films'>
            <thead className='films-head'>
                <tr className='films-head__row'>
                    <td className='films-head__cell'>
                        <h1>Films</h1>
                    </td>
                </tr>
            </thead>

            <tbody className='films-body'>
                <tr className='films-body__row'>
                    <td className='films-body__cell'><h2>Name:</h2>
                    </td>
                    <td className='films-body__cell'><h2>Year:</h2></td>
                    <td className='films-body__cell'><h2>Actors:</h2></td>
                </tr>
                {
                    Object.values(films).map(film => (
                        <tr className='films-body__row'>
                            <td className='films-body__cell films-body__cell-name' key={film._id}>
                                <Link to={`/${film._id}`}><h3>{film.name}</h3></Link>
                            </td>
                            <td className='films-body__cell films-body__cell-year'><h3>{film.year}</h3></td>
                            <tr className='films-body__row-insert'>
                                {
                                    film.actors.map(actor => (
                                        <div className='films-body__row-wrapper'>
                                            <td className='films-body__cell'><b>Name: </b>{actor.name}</td>
                                            <td className='films-body__cell'><b>Age: </b>{actor.age}</td>
                                            <td className='films-body__cell'><b>Oscars: </b>{actor.oscars}</td>
                                        </div>
                                    ))
                                }
                            </tr>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default connect (putStateToProps, putActionsToProps)(Films);