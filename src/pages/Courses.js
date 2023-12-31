/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { courses } from '../CourseData';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function Courses() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastname] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [registeredCourse, setCourse] = useState('')
    const [search, setSearch] = useState('')

    console.log("the search is working", search)



    

    const register = (e)=>{
        e.preventDefault()
        const customer={firstName,lastName,contactNumber,registeredCourse}
        console.log(customer)
        fetch("https://registration-backend-flw6.onrender.com/customer/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(customer),
        }).then(() => {
          console.log("New Customer registered");
        });
    }
    
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <AppBar position="sticky">
        <Toolbar sx={{ padding: "8px 16px" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Shift Left Course Registration
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>
          <Button href="/signin" color="inherit">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{   
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {courses
            .filter((course) => {
              return search.toLowerCase() === ""
                ? course
                : course.name.toLowerCase().includes(search);
            })
            .map((course) => (
              <Card sx={{ width: '300px', height: "100%", margin: 1 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={course.image} // Use the image property from the course object
                    alt={course.name} // Use the course name as the alt text
                  />
                  <CardContent sx={{ height: '100px' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    to="/signup"
                    state={{
                      data: course.name,
                    }}
                  >
                    <Button variant="contained">Register Now!</Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Courses;