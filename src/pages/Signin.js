import React, { useState } from "react";
import Appbar from "../components/Appbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Container, Paper, Button } from "@mui/material";

function Signin() {
  const paperStyle = {
    padding: "3.125rem 1.25rem",
    width: "100%",
    maxWidth: "95vw",
    margin: "1.25rem auto",
    boxSizing: "border-box",
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const customer = { firstName, lastName, contactNumber };

  return (
    <div>
      <Appbar />
      <div
        style={{
          width: "100%", // Ensure the div takes up full width
          padding: 0, // Remove any padding
          margin: 0, // Remove any margin
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(to bottom, white, skyblue)",
        }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Paper elevation={3} style={paperStyle}>
            <h1 style={{ textAlign: "center" }}>Sign In!</h1>
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Contact Number"
              variant="outlined"
              fullWidth
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Link
                to="/profile"
                state={{
                  data: customer,
                }}
              >
                <Button variant="contained">Sign In</Button>
              </Link>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default Signin;
