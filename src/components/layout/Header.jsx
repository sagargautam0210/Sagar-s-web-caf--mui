import React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyle.css";
import { useState } from "react";

const Header = () => {
  let [mobileMenu, setMobileMenu] = useState(false);
  // Function for handling menu on mobile
  let menuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  // Menu Drawer
  let drawer = (
    <Box onClick={menuToggle} sx={{ textAlign: "center" }}>
      <Typography
        color="goldenrod"
        variant={"h6"}
        component={"div"}
        sx={{ flexGrow: 1, fontWeight: "600", fontSize: "25px" }}
      >
        <FastfoodIcon sx={{ fontSize: "25px" }} />
        Web café
      </Typography>
      <Divider />
      {/* on mobile */}
      <ul className="nav-menu-mobile">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar
        component={"nav"}
        sx={{ bgcolor: "#1B262C", top: "0px", position: "sticky" }}
      >
        <Toolbar>
          <IconButton
            onClick={menuToggle}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon
              sx={{
                color: "rgb(196, 190, 190)",
                display: { sm: "none" },
                marginRight: "55px",
                fontSize: "30px",
              }}
            />
          </IconButton>
          <Typography
            color="goldenrod"
            variant={"h6"}
            component={"div"}
            sx={{ flexGrow: 1, fontWeight: "600", fontSize: "32px" }}
          >
            <FastfoodIcon sx={{ fontSize: "22px" }} />
            Web café
          </Typography>
          <Typography
            sx={{ display: { xs: "block", sm: "none", color: "gray" } }}
          >
            {/* cart icon in mobile  */}
            <NavLink to="/cart">
              <ShoppingCartSharpIcon style={{ color: "white" }} />
            </NavLink>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* menu in big width devices */}
            <ul className="nav-menu">
              <li>
                <NavLink activeClassName="active" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/cart"}>
                  {" "}
                  <ShoppingCartSharpIcon />
                </NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      {/* bar */}
      <Box conponent="nav">
        <Drawer
          variant="temporary"
          open={mobileMenu}
          onClose={menuToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "290px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
