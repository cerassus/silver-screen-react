import React from "react";
import { Rating as RatingMUI } from "@material-ui/lab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox as CheckboxMUI } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ratingContainer: {
    display: "flex",
    flexDirection: "column",
    float: "right",
    margin: "0",
    order: "4",
    alignItems: "center"
  },
  list: {
    transform: "scale(0.8)",
  }
});

export const Checkbox = ({ ...props }) => (
  <FormControlLabel style={{margin: "5px 0 0"}}
    control={ <CheckboxMUI { ...props } style={{padding: "3px 3px 3px 0"}} />}
    label="Put on my shelf!"
  />
)


export const RatingContainer = ({children, list, ...rest}) => {
  const classes = useStyles()
  return (
    <div {...rest} className={list ? `${classes.ratingContainer} ${classes.list}`: classes.ratingContainer}>
      {children}
    </div>
  )
}

export const Rating = ({ ...props }) => (
  <RatingMUI
    { ...props }
    precision={0.5}
    size="large"
    emptyIcon={<StarBorderIcon fontSize="inherit" />}
  />
)

