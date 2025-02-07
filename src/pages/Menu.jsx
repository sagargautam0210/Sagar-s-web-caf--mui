import React, { useContext, useState } from "react";
import Layout from "../components/layout/Layout";
import { MenuList } from "../data/Data";
import "../styles/LayoutStyle.css";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Snackbar,
  Typography,
} from "@mui/material";
import { CartContext } from "../Context";

const Menu = () => {
  const [notificationMsg, setNotificationMsg] = useState(false);

  // Function to close the notification Snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotificationMsg(false);
  };

  // Accessing the addCart function from CartContext
  const { addCart } = useContext(CartContext);

  // Function to handle adding a menu item to the cart
  const handleAddToCart = (menu) => {
    addCart(menu); // Add the menu item to the cart
    setNotificationMsg(true); // Show the notification
  };

  return (
    <Layout>
      <h2 className="menu-heading">What's on your mind?</h2>
      <Box
        sx={{
          m: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: 3,
        }}
      >
        {/* Looping the menu items */}
        {MenuList.map((menu) => (
          <Card key={menu.id} sx={{ maxWidth: 300, minHeight: 250 }}>
            {/* Menu Item*/}
            <CardActionArea>
              {/* Image of an item */}
              <CardMedia
                component="img"
                src={menu.image}
                sx={{
                  height: 300,
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              {/* Content of the Image */}
              <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                {/* Name of the item and info for stock */}
                <Box sx={{ display: "flex" ,width: "100%", alignItems: "center"}}>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h5"
                    gutterBottom
                  >
                    {menu.name}
                  </Typography>
                  <Typography 
                  className={`${menu.inStock ? "inStock" : "outOfStock"}`}
                   sx={{
                    ml : 1.6,
                    border: 0.3,
                    height: 1,
                    padding: 0.2,
                    fontSize: 9,
                    mb: 1,
                  }}>
                    {menu.inStock ? "Good to Go" : "Restocking"}
                  </Typography>
                </Box>
                {/* Description of the items and all the details  */}
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {menu.description}
                </Typography>
                {/* Price of the item */}
                <Button
                  onClick={() => handleAddToCart(menu)}
                  variant="outlined"
                  sx={{ mt: 1 }}
                >
                  rs. {menu.price} /-
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      {/* Notification when the item is added to the cart "Added to cart" */}
      <Snackbar
        open={notificationMsg}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleClose} severity="success">
          Added to cart
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default Menu;
