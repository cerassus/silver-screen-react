import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  StyledToolBar,
  StyledIconButton,
  TitleContainer,
  LoginContainer,
} from "../material_ui/TopBar";
import Typography from "../material_ui/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link as RouterLink } from "react-router-dom";

const TopBar = ({ click, user_login, loginToken }) => {
  useEffect(() => {
    loginToken()
  }, [])
  return (
    <AppBar position="static" color="primary">
      <StyledToolBar>
        <TitleContainer>
          <StyledIconButton onClick={click} />
          <Typography type="h2" white inline>
            Silver Screen
          </Typography>
        </TitleContainer>
        <RouterLink id="login_container" to="/account">
          <LoginContainer>
            <Typography white uppercase>
              {user_login.username ? user_login.username : "Login"}
            </Typography>
            <AccountCircleIcon
              style={{ marginLeft: "5px", fontSize: "35px" }}
            />
          </LoginContainer>
        </RouterLink>
      </StyledToolBar>
    </AppBar>
  );
};

export default TopBar;
