import React from "react";
import TextField from "@material-ui/core/TextField";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useState, useEffect } from "react"
import { emailValidation, passwordValidation } from "../../regex";

export const LoginTextField = ({password, onChange, typingError, ...props}) => {
  const [typing_error, setTypingError] = useState(false);
  const handleChange = (e) => {
    onChange(e.target.value)
    if(password) {
      if(passwordValidation(e.target.value) || e.target.value.length === 0) {
        setTypingError("")
      } else setTypingError("Min: 8 characters, 1 digit and 1 capital letter")
    } else {
      if(emailValidation(e.target.value) || e.target.value.length === 0) {
        setTypingError("")
      } else setTypingError("Wrong e-mail")
    }
  }
  useEffect(() => {
    typingError(typing_error)
  }, [typing_error])
  return (
    <TextField
      size="small"
      type={password ? "password" : "email"}
      label={typing_error ? typing_error : password ? "password" : "e-mail"}
      variant="outlined"
      error={Boolean(typing_error)}
      style={{margin: "5px 0 15px"}}
      onChange={(e) => handleChange(e)}
      {...props}
    />
  )
}

export const LoginIcon = () => <AccountBoxIcon 
    style={{ margin: "0 auto", fontSize: "10rem"}} 
    color="primary"
  />


  // "Password must have at least one number, one special character and minimum of 8 characters"