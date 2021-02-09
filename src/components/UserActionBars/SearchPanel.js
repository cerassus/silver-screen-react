import React, { useState, Fragment } from "react";
import TextField from "../material_ui/TextField";
import SearchButton from "../material_ui/SearchButton";
import ModalPopup from "../Modal";

const SearchPanel = ({ database_type, searchForMovie, search }) => {
  const [helper, setHelper] = useState("");
  const [showModal, setModal] = useState(false);
  const [input, setInput] = useState("");
  const handleClick = (e) => {
    if(e.target.innerText === "SEARCH" || e.keyCode == 13) {
      database_type === "API" 
        ? (/[a-z]{3,}/i.test(input))
          ? searchForMovie(input, database_type)
          : setModal(true)
        : (/[a-z]{3,}/i.test(input) || input === "")
          ? search(input)
          : setModal(true)
    }
  }
  const handleInputChange = (e) => {
    /^.{1,2}$/.test(e.target.value)
      ? setHelper("Type at least 3 characters")
      : setHelper("");
    setInput(e.target.value);
  };
  return (
    <Fragment>
      <TextField
        database_type={database_type}
        keyUp={handleClick}
        change={handleInputChange}
        helper={helper}
      />
      <SearchButton 
        database_type={database_type}
        click={handleClick}
      >
        Search
      </SearchButton>
      {showModal && <ModalPopup 
        type="info" 
        error="typing error" 
        info="Type at least 3 characters!" 
        close={() => setModal(false)}
      />}
    </Fragment>
  );
};

export default SearchPanel;
