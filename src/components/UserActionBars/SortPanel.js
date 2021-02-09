import React, { useState, useEffect } from "react";
import FormControl from "../material_ui/FavoritesFormControl";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const SortPanel = ({ sort, type }) => {
  const handleSort = (e) => {
    sort(e.target.value)
  };
  useEffect(() => {
    sort("a+")
  }, [])
  return (
    <FormControl>
      <InputLabel htmlFor="uncontrolled-native">Sort by:</InputLabel>
      <NativeSelect defaultValue="az" onChange={handleSort}>
        <option value="a+">{`Title A -> Z`}</option>
        <option value="a-">{`Title Z -> A`}</option>
        <option value="y+">Year ascending</option>
        <option value="y-">Year descending</option>
        {type === "rating" && (
          <>
            <option value="r+">Rating ascending</option>
            <option value="r-">Rating descending</option>
          </>
        )}
      </NativeSelect>
    </FormControl>
  );
};

export default SortPanel;
