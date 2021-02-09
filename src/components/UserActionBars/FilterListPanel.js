import React, { useState } from "react";
import FormControl from "../material_ui/FavoritesFormControl";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const FilterListPanel = () => {
  const [type, setType] = useState("all");
  const handleType = (e) => {
    setType(e.target.value);
  };
  return (
    <FormControl>
      <InputLabel htmlFor="uncontrolled-native">Filter:</InputLabel>
      <NativeSelect defaultValue="all" onChange={handleType}>
        <option value="all">All</option>
        <option value="movie">Rated</option>
        <option value="series">Shelf</option>
      </NativeSelect>
    </FormControl>
  );
};

export default FilterListPanel;
