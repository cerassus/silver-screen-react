import { connect } from "react-redux";
import Details from "../components/Main/Details";
import { switchLoader } from "../redux/actions";

const mapStateToProps = (state, ownProps) => ({
    recentSearchResponse: state.recentSearchResponse,
    movie_id: ownProps.match.params.movieID 
})

const mapDispatchToProps = dispatch => ({
    switchLoader: () => dispatch(switchLoader()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);