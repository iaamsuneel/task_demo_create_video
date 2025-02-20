import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const validateInput = (name, value) => {
    let errorMsg = "";
    if (!value) {
      errorMsg = `${name} is required`;
    }
    return errorMsg;
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // Validate input
    const errorMsg = validateInput(name, value);
    setUserDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };
  function onRegisterSubmit() {
    const newErrors = {};
    Object.entries(userDetails).forEach(([key, value]) => {
      const errorMsg = validateInput(key, value);
      if (errorMsg) {
        newErrors[key] = errorMsg;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      console.log("Form contains errors:", newErrors);
      return;
    }
    console.log("userDetails ::::", userDetails);
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
            <Typography sx={{ variant:'heading', textAlign: "center", fontWeight: 700, pb: 4 }}>
              Login
            </Typography>
          </Grid>
          <Grid size={12}>
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
          <Grid size={12}>
            <TextField
              type="password"
              name="password"
              onChange={onChangeHandler}
              fullWidth
              size="small"
              placeholder="password"
            />
            {errors.password && (
              <span style={{ color: "red", textTransform: "capitalize" }}>
                {errors.password}
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
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
