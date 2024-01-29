import { useState, useEffect } from 'react';
import AddMovie from './AddMovie';
import Movies from './Movies';
import './App.css'

const App = () => {
  const [movies, setMovie] = useState([
    { title: 'Die Hard', year: 1988, actor: 'Bruce Willis', id: 1 },
    { title: 'Rocky', year: 1976, actor: 'Sylvester Stallone', id: 2 },
    { title: 'Titanic', year: 1997, actor: 'Leonardo Dicaprio', id: 3 },
  ]);

  const [toggle, setToggle] = useState(false);

  const addMovie = (movie) => {
    movie.id = Math.random();
    setMovie([...movies, movie]);
  };

  const deleteMovie = (id) => {
    let newMovies = movies.filter((movie) => {
      return movie.id !== id;
    });
    setMovie(newMovies);
  };

  // useEffect(() => {
  //   console.log("component is rendered")
  // })

  useEffect(() => {
    console.log("first rendering")
  }, [])

  // useEffect(() => {
  //   console.log("Updating the movies array")
  // }, [movies])

  return (
    <div className="App">
      <h1>React Lifecycle</h1>
      <button onClick={() => setToggle(!toggle)}>Change State</button>
      <div className="ninja-list">
        {movies.map((movie) => {
          return (
            <Movies key={movie.id} movie={movie} deleteMovie={deleteMovie} />
          );
        })}
      </div>
      <AddMovie addMovie={addMovie} setMovie={setMovie} />
    </div>
  )
}

export default App
