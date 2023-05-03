import { Movie } from './Movie';
import Not_found from './notfound.png';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            { movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} /> )
            ) : (
                <div><img src={Not_found} /></div>
            ) }
        </div>
     );
} 

export { Movies };