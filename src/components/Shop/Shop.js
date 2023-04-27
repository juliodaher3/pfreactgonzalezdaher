import React from "react";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Shop = () => {
  return (
    <div style={{ display: "flex" }}>
      <CatchingPokemonIcon sx={{ color: "red" }} />
      <span style={{ color: "white" }}>30</span>
    </div>
  );
};

export default Shop;
