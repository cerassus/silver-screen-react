import { connect } from "react-redux";
import Top from "../components/Main/Top";

const mapState = state => ({  
    top_movies: state.top_movies,
})

export default connect(mapState)(Top);