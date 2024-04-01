import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [director, setDirector] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
    .then(response => response.json())
    .then(data => setDirector(data))
    .catch(error => console.error(error))
  }, []);


  const directorList = director.map((direct) => {
    const move = direct.movies;
    const moveList = move.map((mov) => {
      return <ul key={mov}>{mov}</ul>
    })
    return <article key={direct.id}>
      <h2>{direct.name}</h2>
      {moveList}
    </article>
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Director's Page</h1>
        {directorList}
      </main>
    </>
  );
};

export default Directors;
