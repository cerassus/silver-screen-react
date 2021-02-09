import React from "react";
import Paper from "../../containers/Paper";
import Typography from "../material_ui/Typography";
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import { LoginTabs } from "../material_ui/NavigationTabs";
import Tab from '@material-ui/core/Tab';
import FormGroupLogin from "../material_ui/FormGroupLogin"
import FormLoginRegister from "../../containers/FormLoginRegister"
import { LoginIcon } from "../material_ui/FormLoginRegister";
import Button from '@material-ui/core/Button';

const AccountContent = ({ user_login, logoutUser }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Paper content>
      {!user_login.username ? (
      <FormGroupLogin>
        <LoginIcon />

        <AppBar position="static" color="default" style={{boxShadow: "0 0 0", marginBottom: "30px"}}>
          <LoginTabs
            value={value}
            onChange={handleChange}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </LoginTabs>
        </AppBar>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <FormLoginRegister login_form />
          <FormLoginRegister switchTab={() => setValue(0)} />
        </SwipeableViews>
      </FormGroupLogin>
      ) : (
      <FormGroupLogin>
        <Typography variant="h4">You are logged in</Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={logoutUser}
          style={{margin: "30px 0", width: "50%"}}
        >
          Logout
        </Button>
      </FormGroupLogin>
      )}
    </Paper>
  )
}

export default AccountContent;
