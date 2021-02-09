import React from "react";
import SearchPanel from "../../containers/SearchPanel";
import MoviesListContent from "../../containers/MoviesListContent";
import Paper from '../../containers/Paper';
import CardViewPanel from "../UserActionBars/CardViewPanel";


const Search = () => {
  const [view, setView] = React.useState("cards")
  return (
  <>
    <Paper>
      <SearchPanel database_type="API" />
      <CardViewPanel view={view} view_type={(value) => setView(value)} />
    </Paper>
    <MoviesListContent list={view === "lists"} type="search" />
  </>
)
  }

export default Search;
