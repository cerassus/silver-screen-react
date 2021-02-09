import React from "react";
import Paper from "../../containers/Paper";
import AccountContent from "../Contents/AccountContent";
import Typography from "../material_ui/Typography";

const Account = ({ user_login, logoutUser }) => (
  <>
    <Paper>
      <Typography variant="h5" >
        {
          user_login.username 
            ? `Hello, ${user_login.username}` 
            : "Login or register new account!" 
        }
      </Typography>
    </Paper>
    <AccountContent user_login={user_login} logoutUser={logoutUser}/>
  </>
);

export default Account;
