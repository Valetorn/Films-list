import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const EditorFilms = (props) => {
    const id = props.match.params.id;

    const [data, setData] = useState({});

    const newData = {...data};

    useEffect(() => {
        fetch(`/films/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    });

    const postEditedData =  (event) => {
        event.preventDefault();

        const inputName = document.querySelector('#film');
        const inputYear = document.querySelector('#year');

        newData.name = inputName.value;
        newData.year = inputYear.value;
        console.log(newData);

        fetch('/films/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newData)
        })
            .then(() => alert('Film updated!'))
            .catch(err => console.log(err));
    };

    return (
        <form action="#" className='editor' onSubmit={postEditedData}>
            <Link to='/' className='back'>Back</Link>

            <h1 className='editor__title'>Editor:</h1>

            <div className='editor__wrapper'>
                <div className='editor__input-container'>
                    <label htmlFor="film" className='editor__label'>Film's name: </label>
                    <input type="text" id='film' className='editor__input' placeholder={newData.name} />
                </div>

                <div className='editor__input-container'>
                    <label htmlFor="year" className='editor__label'>Film's year: </label>
                    <input type="text" id='year' className='editor__input' placeholder={newData.year} />
                </div>
            </div>

            <button type='submit'>Submit</button>
        </form>  
    ) 
};

export default EditorFilms;