import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  img: {
    maxWidth: "220px",
    height: "330px",
    objectFit: "cover",
    boxShadow: "1px 1px 2px 2px rgba(0,0,0,0.75)",
  },
  list: {
    height: "60px",
    objectFit: "cover",
    boxShadow: "1px 1px 2px 2px rgba(0,0,0,0.75)",
  },
})

const PosterImage = ({ list, poster }) => {
  const classes = useStyles();
  return (
    <img
      className={list ? classes.list : classes.img}
      src={
        poster === "N/A"
          ? "https://movies.cerassus.eu/images/no-image.jpg"
          : poster
      }
    />
  )
}

export default PosterImage
