import {Link} from 'react-router-dom';


function MovieCard({title, id}) {

  
  
  return (
    <article>
        <h2>{title}</h2>
        <p>
          <Link to={`/movies/${id}`}>View Movie</Link>
        </p>
    </article>
  );
};

export default MovieCard;