import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";



const MenuTypes = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "lowercase",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "black",
      fontSize: 18,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.toUpperCase}>Tipos de Chinpokomon</span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/Type/normal" style={styles.link}>
            Normal
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/type/electrico" style={styles.link}>
            Electrico
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Type/agua" style={styles.link}>
            Agua
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Type/fuego" style={styles.link}>
            Fuego
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Type/veneno" style={styles.link}>
            Veneno
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuTypes;
