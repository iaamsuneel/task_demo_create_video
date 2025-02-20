import {
  Avatar,
  Box,
  Button,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AppDialog from "../components/AppDialoge";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
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
          width: 1000,
          height: 600,
        }}
      >
        <Typography sx={{ textAlign: "center", fontWeight: 600, p: 1 }}>
          Upload Data
        </Typography>
        <Box sx={{ boxShadow: 2, p: 2, mt: 2 }}>
          <Grid2 container spacing={1.5}>
            <Grid2 size={1}>
              <Avatar />
            </Grid2>
            <Grid2 size={2}>
              <Typography>First Name : Yash </Typography>
            </Grid2>
            <Grid2 size={2}>
              <Typography>Last Name : Pal</Typography>
            </Grid2>
            <Grid2 size={2.5}>
              <Typography>Email : Yash@gmail.com</Typography>
            </Grid2>
            <Grid2 size={2.5}>
              <Typography>Phone No. : 9452668630</Typography>
            </Grid2>
            <Grid2 size={2}>
              <Button
                size="small"
                variant="outlined"
                sx={{ textTransform: "capitalize" }}
                onClick={handleClickOpen}
              >
                Add Bio
              </Button>
            </Grid2>
          </Grid2>
        </Box>
        <Box>
          <AppDialog
            open={open}
            onClose={() => setOpen(false)}
            title={"Add Bio"}
            maxWidth="sm"
          >
            <Box sx={{ p: 2 }}>
              <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                <Grid2 size={12}>
                  <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Enter Your Bio"
                    multiline
                    rows={4}
                  />
                </Grid2>
                <Grid2 size={12} sx={{ textAlign: "end" }}>
                  <Button
                    sx={{ textTransform: "capitalize" , mr:2}}
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    size="small"
                    type="submit"
                    variant="contained"
                  >
                    Add
                  </Button>
                </Grid2>
              </Grid2>
            </Box>
          </AppDialog>
        </Box>
      </Box>
    </Box>
  );
}
