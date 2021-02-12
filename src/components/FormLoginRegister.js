import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import { LoginTextField } from "./material_ui/FormLoginRegister";
import useFetchPost from "../useFetchPost";
import Loader from "./material_ui/Loader";
import ModalPopup from "./Modal";
import Cookies from "js-cookie";

export default ({ login_form, loginUser, switchTab }) => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [request_type, setRequestType] = useState("")
  const [showModal, setModal] = useState(false);
  const [modal_content, setModalContent] = useState(false);
  const [login_error, setLoginError] = useState("")
  const [password_error, setPasswordError] = useState("")
  const { response, error, loading } = useFetchPost(request_type, login, password)
  const setModalContentAndShow = (text) => {
    setModalContent(text)
    setModal(true)
  }
  const validate = (type) => {
    (login_error || password_error)
      ? setModalContentAndShow((login_error ? `Login: ${login_error}` : "") + "+" + (password_error ? `Password: ${password_error}` : ""))
      : (login && password) 
        ? setRequestType(type)
        : setModalContentAndShow('Fields are empty!')
  }
  const handleClickAndEnter = (e) => {
    if(e.target.innerText || e.keyCode == 13) {
    login_form 
      ? validate("login") 
      : validate("register")
    }
  }
  useEffect(() => {
    error && setModalContentAndShow("Error connecting to the server!")
    if(response.token) {
      loginUser(response)
      Cookies.set("token", response.token)
    }
    if(response.register_success) {
      setModalContentAndShow(response.register_success)
      switchTab()
    }
    response.error && setModalContentAndShow(response.error)
    setRequestType(false)
  }, [response, error])
  return loading ? <Loader /> : (
    <FormControl fullWidth>
      <LoginTextField 
        onKeyUp={handleClickAndEnter}
        typingError={(e) => setLoginError(e)} 
        onChange={(e) => setLogin(e)}
      />
      <LoginTextField 
        onKeyUp={handleClickAndEnter}
        typingError={(e) => setPasswordError(e)} 
        onChange={(e) => setPassword(e)} 
        password 
      />
      <Button 
        variant="contained" 
        color="primary" 
        size="large"
        onClick={handleClickAndEnter}
      >
        {login_form ? "Login" : "Register"}
      </Button>
      {showModal && <ModalPopup 
        type="info" 
        error="alert" 
        info={modal_content} 
        close={() => setModal(false)}
      />}
    </FormControl>
  )
};
