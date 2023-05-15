import React, { useContext } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import MenuTypes from "../MenuTypes/MenuTypes";
import { Link } from "react-router-dom";
import "./ResponsiveNavigation.css";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import { ItemsContext } from "../../context/ItemsContext";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  purchaseButton: {
    color: "orange",
    fontSize: 25,
    fontWeight: "bold",
  },
};

const ResponsiveNavigation = () => {
  const [items] = useContext(ItemsContext);

  return (
    <AppBar position="static" className="ResponsiveNavigation">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="ResponsiveNavigationContainer">
          <Link to="/" style={styles.linkButton}>
            Shop
          </Link>
          <MenuTypes />
          <Link to="/about" style={styles.linkButton}>
            About
          </Link>
          <Link to="/contact" style={styles.linkButton}>
            Contact
          </Link>
          <Link to="/shop" style={styles.linkButton}>
            <i className="CatchingPokemonIcon"></i>
            {items.length}
            <div style={{ display: "flex" }}>
<CatchingPokemonIcon sx={{ color: "red" }} />
</div>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavigation;