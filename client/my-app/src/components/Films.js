import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { putStateToProps, putActionsToProps } from '../store/actions/index';

const Films = (props) => {
    const { items, fetchData } = props;

    const films = Object.values(items.entities.films);
    const actors = items.entities.actors;

    useEffect(() => {
        fetchData();
    }, []);

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
                    films.map(film => (
                        <tr className='films-body__row'>
                            <td className='films-body__cell films-body__cell-name' key={film._id}>
                                <Link to={`/${film._id}`}><h3>{film.name}</h3></Link>
                            </td>
                            <td className='films-body__cell films-body__cell-year'><h3>{film.year}</h3></td>
                            <tr className='films-body__row-insert'>
                                {
                                    Object.values(film.actors).map(actorId => (
                                        <div className='films-body__row-wrapper'>
                                            <td className='films-body__cell'><b>Name: </b>{actors[actorId].name}</td>
                                            <td className='films-body__cell'><b>Age: </b>{actors[actorId].age}</td>
                                            <td className='films-body__cell'><b>Oscars: </b>{actors[actorId].oscars}</td>
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