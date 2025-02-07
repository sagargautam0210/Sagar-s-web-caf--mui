import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ minHeight: "80vh" }}>
        <Box
          sx={{
            mt: { xs: 10, sm: 12 },
            p: { xs: 2, sm: 4 },
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
          >
            Contact Us
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                required
                type="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                type="tel"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Link to={"/"}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactUs;
