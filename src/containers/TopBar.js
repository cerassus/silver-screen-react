import { connect } from "react-redux";
import TopBar from "../components/Header/TopBar";
import { loginToken } from "../redux/actions";

const mapState = state => ({  
    user_login: state.user_login,
})

const mapDispatch = dispatch => ({
    loginToken: () => dispatch(loginToken()),
})

export default connect(mapState, mapDispatch)(TopBar);