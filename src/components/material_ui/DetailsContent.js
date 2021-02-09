import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  movieDetailImg: {
    objectFit: "cover",
    width: "275px",
    boxShadow: "#3f51b5 3px 3px 10px",
  },
  movieDetailContainer: {
    margin: "1px auto",
    display: "flex",
    padding: "30px 12vw",
    flexWrap: "wrap",
    "& > *": {
      padding: "20px"
    }
  },
  centered: {
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    position: "relative",
  },
  paper: {
    backgroundColor: "#f4f3fb",
    flex: "1 1 330px",
    "&:last-of-type": {
      flex: "1 1 100%",
    }
  },
  row: {
    height: "30px",
    "& > td": {
      verticalAlign: "top",
    },
    "& > td:first-child": {
      fontWeight: "800",
    },
    "& > td:last-child": {
      textAlign: "right",
      width: "65%",
    },
  },
  table: {
    width: "90%",
  }
});

export const MovieDetailsContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.movieDetailContainer}>
      {children}
    </div>
  )
}

export const MoviePosterImg = ({ url }) => {
  const classes = useStyles();
  return (
    <img
      className={`${classes.movieDetailImg} ${classes.centered}`}
      src={
        url === "N/A"
          ? "https://movies.cerassus.eu/images/no-image.jpg"
          : url
      }
    />
  )
}

export const MovieElement = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} variant="outlined" className={classes.paper}>
      {children}
    </Paper>
  )
}

const Row = ({ children }) => {
  const classes = useStyles();
  return (
    <tr className={classes.row}>
      {children}
    </tr>
  )
}


export const MovieDetailsTable = ({ movie_details, children }) => {
  const classes = useStyles();
  return (
    <table className={`${classes.centered} ${classes.table}`}>
      <Row>
        <td>Year: </td>
        <td>{movie_details.released}</td>
      </Row>
      <Row>
        <td>Country: </td>
        <td>{movie_details.country}</td>
      </Row>
      <Row>
        <td>Runtime: </td>
        <td>{movie_details.runtime}</td>
      </Row>
      <Row>
        <td>Genre: </td>
        <td>{movie_details.genre}</td>
      </Row>
      <Row>
        <td>Director: </td>
        <td>{movie_details.director}</td>
      </Row>
      <Row>
        <td style={{verticalAlign: "top"}}>Actors: </td>
        <td>{movie_details.actors.split(",").map((x, i) => <p key={i}>{x}</p>)}</td>
      </Row>
      <Row>
        <td>IMDB rating: </td>
        <td title={movie_details.imdbRating}>
          <Rating 
            name="read-only" 
            value={Math.round(Number(movie_details.imdbRating) * 2)/4} 
            readOnly
          />
        </td>
      </Row>
      <Row>
        <td>Your rating: </td>
        <td>{children}</td>
      </Row>
    </table>
  )
}
