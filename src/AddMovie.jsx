import { useState, useEffect } from 'react';

const AddMovie = ({ addMovie }) => {
    const [newMovie, setNewMovie] = useState({
        title: '',
        year: '',
        actor: '',
    });
    const handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        setNewMovie({
            ...newMovie,
            [property]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(newMovie);
        setNewMovie({ title: '', year: '', actor: '' });
    };

    // useEffect(() => {
    //     console.log("Add Movie component re-rendered")
    // })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    value={newMovie.title}
                    type="text"
                    id="title"
                    onChange={handleChange}
                />
                <label htmlFor="year">Year:</label>
                <input
                    value={newMovie.year}
                    type="text"
                    id="year"
                    onChange={handleChange}
                />
                <label htmlFor="actor">Actor:</label>
                <input
                    value={newMovie.actor}
                    type="text"
                    id="actor"
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddMovie;