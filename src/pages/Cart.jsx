import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import { CartContext } from "../Context";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeCart } = useContext(CartContext); // Accessing cart items and removeCart function

  // Calculating total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Layout>
      <Container sx={{ textAlign: "center", minHeight: "100vh" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", p: 3 }}>
          Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="h6" sx={{ mt: 36, color: "gray" }}>
            Your cart is empty....
          </Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              m: 2,
            }}
          >
            {cartItems.map((item, index) => (
              <CardActionArea key={index}>
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    src={item.image}
                    sx={{
                      height: 90,
                      maxWidth: 90,
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2">
                      Price: rs. {item.price} /-
                    </Typography>
                  </CardContent>
                  <Button
                    variant="outlined"
                    sx={{ height: "40px" }}
                    color="primary"
                    onClick={() => removeCart(index)}
                  >
                    Remove
                  </Button>
                </Card>
              </CardActionArea>
            ))}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  fontWeight: "bold",
                  textDecoration: "line-through",
                }}
              >
                Original Price: Rs. {totalPrice} /-
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "green" }}
              >
                Discounted Price: Rs. {totalPrice - totalPrice / 10} /-
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Link to="/menu">
                <Button variant="outlined">Back to menu</Button>
              </Link>
              <Link to="/contact">
                <Button sx={{ mx: 2 }} variant="outlined" color="secondary">
                  Order now
                </Button>
              </Link>
              <Link to="/payment">
                <Button variant="outlined">Payment Method</Button>
              </Link>
            </Box>
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export default Cart;
