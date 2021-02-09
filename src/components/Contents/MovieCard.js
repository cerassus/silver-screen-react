import React, { useEffect, useState } from "react";
import Card, { CardContent as CardTitle, Link } from "../material_ui/MovieCard";
import CloseButton from "../material_ui/MovieCardCloseButton";
import Typography from "../material_ui/Typography";
import Poster from "../material_ui/MovieCardPosterImage";
import Rating from "../../containers/Rating";
import Loader from "../material_ui/Loader";

const MovieCard = ({ list, movie }) => {
  const [close_is_visible, setCloseVisibility] = useState(false);
  const [deleteMovie, setDelete] = useState(false);
  useEffect(() => {
    close_is_visible && setDelete(false)
  }, [close_is_visible])
  return !movie ? <Loader /> : (
    <Card list={list}>    
      <Link order={list ? 1 : 3} to={`/${movie.imdbID}`}>
        <Poster poster={movie.poster} list={list} />
      </Link> 
      <Link order={list ? 2 : 1} to={`/${movie.imdbID}`}>
        <CardTitle>
          <Typography card white>{movie.title}</Typography>  
          <CloseButton 
            is_visible={close_is_visible} 
            delete_movie={() => setDelete(deleteMovie => !deleteMovie)} 
          />
        </CardTitle>
      </Link> 
      <Link order={list ? 3 : 2}to={`/${movie.imdbID}`}>
        <Typography card>{movie.year}</Typography>
      </Link> 
      <Rating
        key={`${movie.imdbID} - rating`}
        movie_from_card={movie}
        showCloseButton={(bool) => setCloseVisibility(bool)}
        deleteMovie={deleteMovie}
        list={list}
      />
    </Card>
    
  );
};

export default MovieCard;
