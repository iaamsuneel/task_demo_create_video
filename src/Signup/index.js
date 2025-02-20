import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import jwtAxios from "../service/jwt-auth";

export default function Signup() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});
  const validateInput = (name, value) => {
    let errorMsg = "";
    if (!value) {
      errorMsg = `${name} is required`;
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      errorMsg = "Invalid email format";
    } else if (name === "phoneNumber" && value.length < 10) {
      errorMsg = "Phone No. must be 10 digits";
    }
    return errorMsg;
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log("name, value", name, value);
    // Validate input
    const errorMsg = validateInput(name, value);
    setUserDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };
  async function onRegisterSubmit() {
    const newErrors = {};
    // Validate all fields
    Object.entries(userDetails).forEach(([key, value]) => {
      const errorMsg = validateInput(key, value);
      if (errorMsg) {
        newErrors[key] = errorMsg;
      }
    });
    // Update error state
    setErrors(newErrors);
    // If there are any errors, stop submission
    if (Object.keys(newErrors).length > 0) {
      console.log("Form contains errors:", newErrors);
      return;
    }
    console.log("userDetails ::::", userDetails);
    const response = await jwtAxios.post("/create/createAccount",userDetails);
    console.log("ressss", response);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          boxShadow: 1,
          width: 400,
          height: 250,
          p: 5,
          bgcolor: "#f4f6f8",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          <Grid size={12}>
            <Typography
              sx={{
                variant: "h1",
                textAlign: "center",
                fontWeight: 700,
                pb: 4,
              }}
            >
              Create Account
            </Typography>
          </Grid>
          <Grid size={6}>
            <TextField
              name="firstName"
              onChange={onChangeHandler}
              fullWidth
              size="small"
              placeholder="First Name"
            />
            {errors.firstName && (
              <span style={{ color: "red", p: 1, textTransform: "capitalize" }}>
                {errors.firstName}
              </span>
            )}
          </Grid>
          <Grid size={6}>
            <TextField
              name="lastName"
              onChange={onChangeHandler}
              fullWidth
              size="small"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <span style={{ color: "red", p: 1, textTransform: "capitalize" }}>
                {errors.lastName}
              </span>
            )}
          </Grid>
          <Grid size={6}>
            <TextField
              name="email"
              onChange={onChangeHandler}
              type="email"
              fullWidth
              size="small"
              placeholder="Email"
            />
            {errors.email && (
              <span style={{ p: 1, color: "red", textTransform: "capitalize" }}>
                {errors.email}
              </span>
            )}
          </Grid>
          <Grid size={6}>
            <TextField
              type="number"
              name="phoneNumber"
              onChange={onChangeHandler}
              fullWidth
              size="small"
              placeholder="Phone No."
            />
            {errors.phoneNumber && (
              <span style={{ color: "red", textTransform: "capitalize" }}>
                {errors.phoneNumber}
              </span>
            )}
          </Grid>
          <Grid size={12} sx={{ textAlign: "center", mt: 2 }}>
            <Button
              fullWidth
              sx={{ textTransform: "capitalize" }}
              size="small"
              type="submit"
              variant="contained"
              onClick={onRegisterSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
