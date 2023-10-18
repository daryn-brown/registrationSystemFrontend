import React, {useState} from 'react';
// import { useLocation, Link, useNavigate } from "react-router-dom";
import { useLocation, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { Container, makeStyles, Paper, Button } from "@mui/material";
import { Container, Paper, Button } from '@mui/material';

export default function Customer(props) {
    const location = useLocation();
    // const navigate = useNavigate();
    const paperStyle={padding: '50px 20px', width:600, margin:"20px auto"}
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastname] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const data = location.state?.data;
    const registeredCourses = data;
    const customer = {firstName,lastName,contactNumber,registeredCourses};

    console.log(data)
    const register = (e)=>{
        e.preventDefault()
        console.log(customer)
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
    }
    
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
          <h1>Register Now!</h1>
          <TextField
            required
            type={"text"}
            id="outlined-basic"
            label="First name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ marginBottom: "16px" }}
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
            style={{ marginBottom: "16px" }}
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
            style={{ marginBottom: "16px" }}
          />
          <TextField
            id="outlined-read-only-input"
            label="Course"
            defaultValue={data}
            fullWidth
            InputProps={{ readOnly: true }}
            style={{ marginBottom: "16px" }}
          />

          <Button variant="contained" onClick={register}>
            Submit
          </Button>
          {submitted && (
            <Link
              to="/profile"
              state={{
                data: customer,
              }}
            >
              {" "}
              View Profile{" "}
            </Link>
          )}
        </Paper>
      </Box>
    </div>
  );
}