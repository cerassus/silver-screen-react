import { connect } from "react-redux";
import Rating from "../components/Rating";
import { pushMovie, removeMovie } from "../redux/actions";

const mapStateToProps = state => ({
    user_movie_database: state.user_login.username
        ? state.user_login.movies
        : state.user_movie_database
})

const mapDispatchToProps = dispatch => ({
    removeMovie: (movie) => dispatch(removeMovie(movie)),
    pushMovie: (movie) => dispatch(pushMovie(movie)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Rating);