import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "./Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPaper: {
    backgroundColor: "#ebeeff",
    border: "3px solid #3f51b5",
    minWidth: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
  },
  infoContainer: {
    margin: "40px 15px",
    textAlign: "center",
  },
  modalButton: {
    borderBottom: "3px solid #3f51b5",
    textAlign: "center",
    color: "#3f51b5",
    padding: "15px",
    "&:hover": {
      backgroundColor: "#3f51b5",
      cursor: "pointer",
      "& *": {
        color: "#FFF",
      }
    },
  },
  modalOkButton: {
    width: "100%",
  },
  modalChooseButton: {
    width: "70%",
    marginBottom: "15px",
  },
  modalH5: {
    textTransform: "uppercase",
    color: "#3f51b5",
    marginBottom: "15px",
  },
});



export const ModalContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.modalPaper}>
      {children}
    </div>
  )
}

export const InfoContainer = ({ info }) => {
  const classes = useStyles();
  return (
    <div className={classes.infoContainer}>
      {info.split("+").map((x, i) => (
        <p key={i}>{x}</p>
      ))}
    </div>
  )
}

export const InfoAlert = ({ handleClose }) => {
  const classes = useStyles();
  return (
    <Paper
      onClick={handleClose}
      className={`${classes.modalButton} ${classes.modalOkButton}`}
    >
      <Typography variant="h5">OK!</Typography>
    </Paper>
  )
}

export const InfoConfirmChange = ({ rating, handleConfirmChangeRating, handleConfirmChangeShelf, handleClose, }) => {
  const ratingTexts = [ "Rate this movie!", "Oops, not yet!"]
  const shelfTexts = ["Delete my rating!", "Leave it!"]
  const classes = useStyles()
  return (
    <>
    <Paper
      onClick={rating ? handleConfirmChangeRating : handleConfirmChangeShelf}
      className={`${classes.modalButton} ${classes.modalChooseButton}`}
    >
      <Typography variant="h5">{rating ? ratingTexts[0] : shelfTexts[0]}</Typography>
    </Paper>
    <Paper
      onClick={handleClose}
      className={`${classes.modalButton} ${classes.modalChooseButton}`}
    >
      <Typography variant="h5">{rating ? ratingTexts[1] : shelfTexts[1]}</Typography>
    </Paper>
  </>
  )
}

export const Popup = ({ children, open, ...rest }) => {
  const classes = useStyles();
  return (
    <Modal
      className={classes.modalContainer}
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      {...rest}
    >
      <Fade in={open}>
        {children}
      </Fade>
    </Modal>
  );
};
