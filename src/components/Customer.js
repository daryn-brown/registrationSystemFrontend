import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Paper, Button } from "@mui/material";

export default function Customer(props) {
  const location = useLocation();
    const paperStyle = {
    padding: "3.125rem 1.25rem",
    width: "100%",
    maxWidth: "95vw", // set a max-width based on viewport width
    margin: "1.25rem auto", // center the container with auto margins on the sides
    boxSizing: "border-box", // ensures padding is included in width
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const data = location.state?.data;
  const registeredCourses = data;
  const customer = { firstName, lastName, contactNumber, registeredCourses };

  console.log(data);
  const register = (e) => {
    e.preventDefault();
    console.log(customer);
    fetch("https://registration-backend-flw6.onrender.com/customer/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    }).then(() => {
      console.log("New Customer registered");
      console.log(submitted);
      setSubmitted(true);
      console.log(submitted);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // set to column
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, white, skyblue)",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25rem" },
        }}
        noValidate
        autoComplete="off"
      >
        <img
          src="/logo.png"
          alt="logo"
          style={{
            position: "absolute",
            top: "14rem", // 160px
            width: "9.375rem", // 150px
            zIndex: 1,
          }}
        />
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ textAlign: "center" }}>Register Now!</h1>
          <TextField
            required
            type={"text"}
            id="outlined-basic"
            label="First name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ marginBottom: "1rem" }} // 16px
          />
          <TextField
            required
            type={"text"}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            style={{ marginBottom: "1rem" }} // 16px
          />
          <TextField
            required
            type={"tel"}
            id="outlined-basic"
            label="Contact Number"
            variant="outlined"
            fullWidth
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            style={{ marginBottom: "1rem" }} // 16px
          />
          <TextField
            id="outlined-read-only-input"
            label="Course"
            defaultValue={data}
            fullWidth
            InputProps={{ readOnly: true }}
            style={{ marginBottom: "1rem" }} // 16px
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem", // 16px
            }}
          >
            <Button variant="contained" onClick={register}>
              Submit
            </Button>
          </div>

          {submitted && (
            <Link
              underline="hover"
              to="/profile"
              state={{
                data: customer,
              }}
            >
              {" "}
              VIEW PROFILE{" "}
            </Link>
          )}
        </Paper>
      </Box>
    </div>
  );
}
