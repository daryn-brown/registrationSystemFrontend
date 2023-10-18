import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import Appbar from "../components/Appbar";
import { Button } from '@mui/material';
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
  
function Profile(props){
    const location = useLocation();
    const data = location.state?.data;
    console.log(data)

    const [userData, setUserData] = useState([])
    const [course, setCourse] = useState('')

    useEffect(() => {
        const getUserData = async() => {
            let url =
              "https://registration-backend-flw6.onrender.com/customer/user?firstname=" +
              data.firstName +
              "&lastName=" +
              data.lastName +
              "&contactNumber=" +
              data.contactNumber;
            console.log(url)
            let response = await fetch(url,{
                    method:"GET",
                })
            let result = await response.json()
            setUserData(result)
            setCourse(userData.registeredCourses)
            console.log(course,"course")
            console.log(userData)
        };
        getUserData();
    }, [course, data.contactNumber, data.firstName, data.lastName, userData])

    const removeCourseInDatabase = () => {
        let url =
          "https://registration-backend-flw6.onrender.com/customer/remove/course?courseName=" +
          "" +
          "&contactNumber=" +
          data.contactNumber;
        fetch(url,{
            method:"PUT",
        }).then(()=>{
            console.log("Course Dropped")
            window.location.reload(false);
        })
    }
    return (
      <div>
        <Appbar />

        <PersonIcon />
        <h3>
          {userData.firstName} {userData.lastName}
        </h3>

        <BookIcon />
        <h3>{userData.registeredCourses}</h3>
        <Button onClick={removeCourseInDatabase}> Remove Course </Button>
      </div>
    );
}

export default Profile;