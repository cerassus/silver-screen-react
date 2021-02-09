import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  closeButton: {
    display: "flex",
    alignItems: "center",
    padding: "0 5px",
    height: "100%",
    cursor: "pointer",
    fontSize: "20px",
  },
  closeIconHidden: {
    width: "0px",
  },
  closeIcon: {
    width: "30px",
    height: "auto",
  },
})

const MovieCardCloseButton = ({ is_visible, delete_movie }) => {
  const classes = useStyles()
  return (
        <div className={classes.closeButton}>
          <img
            className={is_visible ? classes.closeIcon : classes.closeIconHidden}
            src="https://movies.cerassus.eu/images/close-icon.png"
            onClick={delete_movie}
          />
        </div>
  )
}

export default MovieCardCloseButton
