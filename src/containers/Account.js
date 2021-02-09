import { connect } from "react-redux";
import Account from "../components/Main/Account";
import { logoutUser } from "../redux/actions";

const mapState = state => ({
    user_login: state.user_login,
})

const mapDispatch = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
})

export default connect(mapState, mapDispatch)(Account);