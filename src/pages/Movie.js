import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
const [movie, setMovie] = useState({});
const params = useParams();
const movieID = params.id;
console.log(params)

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieID}`)
    .then(response => response.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieID]);

  if(!movie.id) {
    return <h1> Loading... </h1>
  };

  const genre = movie.genres;
  const thisGenre = genre.map((gen) => {
    return <span>{gen}</span>
  })


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {thisGenre}
      </main>
    </>
  );
};

export default Movie;
