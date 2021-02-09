import React, { useState, useEffect } from "react";
import { RatingContainer, Rating, Checkbox, } from "../components/material_ui/Rating";
import Modal from "./Modal";

const modals_info = {
  changeToShelf:
    "It seems that this movie is rated by You. +Are You sure you want to delete this rating and add movie to Shelf list?!",
  changeToRating:
    "It seems that this movie is on your Shelf. +Are You sure you want to delete it from this list and give it a Rating?!",
};

const RatingComponent = ({
  movie_from_card,
  user_movie_database,
  removeMovie,
  pushMovie,
  showCloseButton = false,
  deleteMovie = false,
  ...rest
}) => {
  const index = user_movie_database.findIndex(
    (db_item) => db_item.imdbID === movie_from_card.imdbID
  );
  const [movie, setMovie] = useState(
    index < 0 ? movie_from_card : user_movie_database[index]
  );
  const [componentDidMount, setComponentDidMount] = useState(false);
  const [showModal, setModal] = useState(false);
  const [stars, setStars] = useState(0);
  const [changeToShelf, setChangeToShelf] = useState(false);
  const [changeToRating, setChangeToRating] = useState(false);
  const handleShelf = (e) => {
    if (e.target.checked) {
      movie.rating ? setModal(true) : setChangeToShelf(true);
    } else {
      removeMovie(movie);
      setMovie({
        ...movie,
        shelf: false,
      });
    }
  };
  const handleRating = (e) => {
    setStars(Number(e.target.value));
  };
  useEffect(() => {
    setComponentDidMount(true);
  }, []);
  useEffect(() => {
    componentDidMount && (movie.rating || movie.shelf) && pushMovie(movie);
    (movie.shelf || movie.rating)
      ? showCloseButton(true)
      : showCloseButton(false)
  }, [movie]);
  useEffect(() => {
    setChangeToRating(false);
    setChangeToShelf(false);
  }, [showModal]);
  useEffect(() => {
    changeToShelf &&
      setMovie({
        ...movie,
        rating: false,
        shelf: true,
      });
    setChangeToShelf(false);
  }, [changeToShelf]);
  useEffect(() => {
    changeToRating &&
      setMovie({
        ...movie,
        rating: stars,
        shelf: false,
      });
    setChangeToRating(false);
  }, [changeToRating]);
  useEffect(() => {
    if (deleteMovie) {
      removeMovie(movie);
      setMovie({
        ...movie,
        shelf: false,
        rating: false,
      });
    }
    setChangeToRating(false);
    setChangeToShelf(false);
  }, [deleteMovie]);
  useEffect(() => {
    componentDidMount &&
      stars &&
      (movie.shelf ? setModal(true) : setChangeToRating(true));
  }, [stars]);
  return (
    <RatingContainer {...rest} >
      <Rating
        name={`${movie.imdbID} - rating`}
        onChange={handleRating}
        value={movie.rating ? movie.rating : 0}
      />
      <Checkbox
        checked={Boolean(movie.shelf)}
        onChange={handleShelf}
        id={`${movie.imdbID} - shelf`}
      />
      {showModal && (
        <Modal
          type={movie.shelf ? "changeToRating" : "changeToShelf"}
          error="Are You sure?"
          info={
            movie.shelf
              ? modals_info.changeToRating
              : modals_info.changeToShelf
          }
          close={() => setModal(false)}
          confirmShelf={(value) => setChangeToShelf(value)}
          confirmRating={(value) => setChangeToRating(value)}
        />
      )}
    </RatingContainer>
  );
};

export default RatingComponent;
