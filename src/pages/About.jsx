import React from "react";
import { Container, Typography} from "@mui/material";
import {Box, Grid } from '@mui/material';
import Layout from "../components/layout/Layout";
import myImage from '../Images/body 2.jpeg'; 


const About = () => {
  return (
    <Layout>
      <Container
  sx={{
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  }}
>
  <Box
    sx={{
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      maxWidth: "800px",
    }}
  >
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <img
        //image used in about us section
          src={myImage}
          alt="Sagar at Sagar's Web Café"
          style={{ width: "70%", borderRadius: "8px" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          <strong>Welcome to Sagar's Web Café!</strong>
        </Typography>
        <Typography variant="body1">
          At Sagar's Web Café, we are dedicated to offering a unique and
          comfortable experience for our visitors. Whether you need a place to
          work, connect, or just enjoy a cup of coffee, we've got you covered.
          Our mission is to provide a welcoming space where technology and
          community come together, enhancing your productivity and relaxation.
        </Typography>
      </Grid>
    </Grid>
  </Box>
</Container>
    </Layout>
  );
};

export default About;
