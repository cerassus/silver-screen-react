import React, { useState, useEffect } from "react";
import FormControl from "../material_ui/FavoritesFormControl";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const FilterTypePanel = ({ filter }) => {
  const handleType = (e) => {
    const info = Boolean(e.target.value === "all")
    filter(info ? "" : e.target.value)
  };
  useEffect(() => {
    filter("")
  }, [])
  return (
    <FormControl>
      <InputLabel htmlFor="uncontrolled-native">Filter:</InputLabel>
      <NativeSelect defaultValue="all" onChange={handleType}>
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
        <option value="game">Game</option>
      </NativeSelect>
    </FormControl>
  )
}

export default FilterTypePanel