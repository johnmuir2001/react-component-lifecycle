import { useEffect } from "react";

const Movie = ({ movie, deleteMovie }) => {

    useEffect(() => {

        const handleKey = () => {
            console.log("key clicked")
        }

        document.addEventListener("keypress", handleKey)

        return () => {
            document.removeEventListener("keypress", handleKey)
            console.log("component stopped being rendered")
        }
    }, [])

    return (
        <div className="movie" key={movie.id}>
            <div>Title: {movie.title}</div>
            <div>Year: {movie.year}</div>
            <div>Actor: {movie.actor}</div>
            <button
                onClick={() => {
                    deleteMovie(movie.id);
                }}>
                Delete Movie
            </button>
        </div>
    );
};

export default Movie;