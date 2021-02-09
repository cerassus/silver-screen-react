import { connect } from "react-redux";
import Paper from "../components/material_ui/Paper";

const mapState = state => ({
    loader: state.loader,
})

export default connect(mapState)(Paper);