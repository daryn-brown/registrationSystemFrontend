import React, {useState} from 'react';
import Appbar from '../components/Appbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Container, Paper } from '@mui/material';

function Signin(){
    const paperStyle={padding: '50px 20px', width:600, margin:"20px auto"}
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastname] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const customer={firstName,lastName,contactNumber}
    
    return (
        <div className="App">
            <Appbar/>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <Container>
                <Paper elevation={3} style={paperStyle}>
                    <h1>Sign In!</h1>
                        <TextField id="outlined-basic" label="First name" variant="outlined" fullWidth
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
                        value={lastName}
                        onChange={(e)=>setLastname(e.target.value)}
                        />
                        <TextField id="outlined-basic" label="Contact Number" variant="outlined" fullWidth
                        value={contactNumber}
                        onChange={(e)=>setContactNumber(e.target.value)}
                        />
                        <Link to ='/profile'
                    state = {{
                        data: customer
                    }}> Sign In </Link>
                </Paper>
            </Container>
            </Box>
        </div>

        
    );
}

export default Signin;