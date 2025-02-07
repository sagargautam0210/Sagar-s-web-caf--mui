import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Layout from '../components/layout/Layout';
import { Link } from "react-router-dom";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Layout>
    <Container maxWidth="sm" sx={{mt: 10}}>
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Payment Details
        </Typography>

        {/* Payment Method Selection */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="payment-method-label">Select Payment Method</InputLabel>
          <Select
            labelId="payment-method-label"
            value={paymentMethod}
            onChange={handlePaymentChange}
            label="Select Payment Method"
          >
            <MenuItem value="e-sewa">E-sewa</MenuItem>
            <MenuItem value="bank">Bank</MenuItem>
          </Select>
        </FormControl>

        {paymentMethod === 'e-sewa' && (
          <>
            {/* E-Sewa Account Input */}
            <TextField
              label="E-Sewa Account Number"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
            />
          </>
        )}

        {paymentMethod === 'bank' && (
          <>
            {/* Bank Selection */}
            <FormControl fullWidth margin="normal">
              <InputLabel id="bank-selection-label">Select Bank</InputLabel>
              <Select
                labelId="bank-selection-label"
                value={paymentMethod}
                onChange={handlePaymentChange}
                label="Select Bank"
              >
                <MenuItem value="nabil">Nabil Bank</MenuItem>
                <MenuItem value="nic-asia">NIC Asia Bank</MenuItem>
                <MenuItem value="sanima">Sanima Bank</MenuItem>
                <MenuItem value="prabhu">Prabhu Bank</MenuItem>
              </Select>
            </FormControl>

            {/* Card Number */}
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
            />

            {/* Expiry Date */}
            <TextField
              label="Expiry Date (MM/YY)"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
            />

            {/* CVV */}
            <TextField
              label="CVV"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
            />
          </>
        )}

        {/* Submit Button */}
        <Link to="/contact">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Pay Now
        </Button>
        </Link>
      </Box>
    </Container>
    </Layout>
  );
};

export default PaymentForm;
