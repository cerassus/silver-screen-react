import React, { useState } from "react";
import { IconCards, IconList, IconPanel } from "../material_ui/FavoritesFormControl";


const CardViewPanel = ({ view, view_type }) => {
  const [checked, setChecked] = useState(view || "cards")
  return (
    <IconPanel onChange={event => {
        setChecked(event.target.id); 
        view_type(event.target.id)
      }
    }>
      <IconList checked={checked} />
      <IconCards checked={checked} />
    </IconPanel>
  );
};



export default CardViewPanel;
