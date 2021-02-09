import { connect } from "react-redux";
import FormLoginRegister from "../components/FormLoginRegister";
import { loginUser } from "../redux/actions";

const mapDispatch = dispatch => ({
    loginUser: (response) => dispatch(loginUser(response)),
})

export default connect(null, mapDispatch)(FormLoginRegister);