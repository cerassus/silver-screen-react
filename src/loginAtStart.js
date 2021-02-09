import Cookies from "js-cookie";
import { loginUser } from "./redux/actions";

export function loginToken() {
  return async function (dispatch) {
    const token = "" || Cookies.get("token");
    if(!token) return {}
    console.log("Token in cookies!")
    const api_shot = await fetch(`http://localhost:3003/user/loginToken`, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      method: "POST",
    });
    const response = await api_shot.json();
    console.log(response)
    dispatch(loginUser(response));
  };
}
