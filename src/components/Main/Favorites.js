import React, { useState } from "react";
import SearchPanel from "../../containers/SearchPanel";
import MoviesListContent from "../../containers/MoviesListContent";
import FilterTypePanel from "../UserActionBars/FilterTypePanel";
import SortPanel from "../UserActionBars/SortPanel";
import Paper from "../../containers/Paper";
import CardViewPanel from "../UserActionBars/CardViewPanel";

const Favorites = ({ type="rating" }) => {
  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("az")
  const [search, setSearch] = useState("")
  const [view, setView] = React.useState("cards")
  return (
    <>
      <Paper>
        <SearchPanel search={(text) => setSearch(text)} database_type="USER" />
        <FilterTypePanel filter={(filter) => setFilter(filter)} />
        <SortPanel sort={(sort) => setSort(sort)} type={type} />
        <CardViewPanel view={view} view_type={(value) => setView(value)} /> 
      </Paper>
      <MoviesListContent list={view === "lists"} filter={filter} sort={sort} type={type} search={search} />
    </>
  )
}

export default Favorites
