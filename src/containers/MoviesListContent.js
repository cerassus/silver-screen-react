import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import MoviesListContent from "../components/Contents/MoviesListContent";

const mapState = (state, { type, sort, filter, search }) =>  ({
    database: type === "search" 
                ? state.recentSearchResponse 
                : state.user_login.username
                    ? state.user_login.movies.filterAndSort(type, filter, sort, search)
                    : state.user_movie_database.filterAndSort(type, filter, sort, search)
})


export default compose(withRouter, connect(mapState))(MoviesListContent)
