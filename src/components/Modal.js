import React, { useState, useEffect } from "react";
import Typography from "./material_ui/Typography";
import { Popup, InfoConfirmChange, InfoAlert, InfoContainer, ModalContainer } from "./material_ui/Modal";

const ModalPopup = ({ info, close, error, type, confirmShelf, confirmRating, }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    close();
    setOpen(false);
  };
  const handleConfirmChangeRating = () => {
    confirmRating(true);
    handleClose();
  };
  const handleConfirmChangeShelf = () => {
    confirmShelf(true);
    handleClose();
  };
  const handleEnter = (e) => {
    if(e.keyCode === 13 && open) handleClose();
  };
  useEffect(() => {
    document.addEventListener('keyup', handleEnter)
    return () => {
      document.removeEventListener('keyup', handleEnter)
    }
  }, [])
  return (
    <Popup
      open={open}
      onClose={handleClose}
      // onKeyUp={handleEnter}
    >
      <ModalContainer>
        <Typography uppercase variant="h5">{error}</Typography>
        <InfoContainer info={info} />
          {type === "info" && <InfoAlert handleClose={handleClose} />}
          {type === "changeToRating" && <InfoConfirmChange rating handleConfirmChangeRating={handleConfirmChangeRating} handleClose={handleClose} />}
          {type === "changeToShelf" && <InfoConfirmChange handleConfirmChangeShelf={handleConfirmChangeShelf} handleClose={handleClose} />}
      </ModalContainer>      
    </Popup>
  )
}

export default ModalPopup;
