import { connect } from "react-redux";
import SearchPanel from "../components/UserActionBars/SearchPanel";
import { searchForMovie } from "../redux/actions";

const mapDispatch = dispatch => ({
    searchForMovie: (input, database) => dispatch(searchForMovie(input, database)),
})

export default connect(null, mapDispatch)(SearchPanel);