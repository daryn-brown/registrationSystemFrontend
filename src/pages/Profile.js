import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Appbar from "../components/Appbar";
import { Button } from '@mui/material';
  
function Profile(props){
    const location = useLocation();
    const data = location.state?.data;
    console.log(data)

    const [userData, setUserData] = useState([])
    const [course, setCourse] = useState('')

    useEffect(() => {
        const getUserData = async() => {
            let url = "http://localhost:8080/customer/user?firstname="+data.firstName+"&lastName="+data.lastName+"&contactNumber="+data.contactNumber;
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
    }, [])

    const removeCourseInDatabase = () => {
        let url = "http://localhost:8080/customer/remove/course?courseName="+""+"&contactNumber="+data.contactNumber;
        fetch(url,{
            method:"PUT",
        }).then(()=>{
            console.log("Course Dropped")
            window.location.reload(false);
        })
    }
    return (
        <div>
            <Appbar/>
                <h2>{userData.firstName}</h2>
                <h2>{userData.lastName}</h2>
                
                <h2>{userData.registeredCourses}</h2>
                <Button onClick={removeCourseInDatabase}> Remove Course </Button>
        </div>
      );
}

export default Profile;