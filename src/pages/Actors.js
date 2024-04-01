import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actor, setActor] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
    .then(response => response.json())
    .then(data => setActor(data))
    .catch(error => console.error(error))
  }, []);


  const actorList = actor.map((act) => {
    const acts = act.movies;
    const actList = acts.map((a) => {
      return <ul key={a}>{a}</ul>
    })
    return <article key={act.id}>
      <h2>{act.name}</h2>
      {actList}
    </article>
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
};

export default Actors;
