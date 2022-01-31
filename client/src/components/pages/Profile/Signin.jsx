import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { CatContext } from '../../../Context/CatContext.jsx';
import axios from 'axios';
import Profile from "./Profile.jsx";

const Signin = () => {
  const { workoutPlans, calendar, userLog, user, setUser, password, setPassword } = useContext(CatContext);

  const handleUserChange = (e) => {
    //update state
    setUser(e.target.value);
    console.log(user);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);

  }

  const handleSignUp = (e) => {
    //send post req to database with credenentials
    e.preventDefault();
    const newUser = {
      username: user,
      password: password,
    };
   
   
    return axios.post('/api/router/signup', newUser).then(() => {
      alert('New User Created, click Home to continue!');
    }).catch((err) => {
      console.warn(err);
    })
  }
  const handleLogin = (e) => {
    //send post req to database with credenentials
    e.preventDefault();
    const User = {
      username: user,
      password: password,
    };
   
   
    return axios.get('/api/router/signup', User).then(({data}) => {
      //descructure neccessary vals
      const { workoutPlansState, calendarState, userLogState, userState} = data;
      //set state of app
      setWorkoutPlans(workoutPlansState);
      setUser(userState);
      setCalendar(calendarState);
      setUserLog(userLogState);

    }).catch((err) => {
      console.warn(err);
    })
  }
 

  return <div>
    {/* <a href='http://localhost:3000/google'>
      Signin With Google
    </a> */}
    <h2>Log-In/Sign-Up</h2>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control  placeholder="Enter username" onChange={handleUserChange} />
    <Form.Text className="text-muted">
    We value Your privacy, we'll never share your information with anyone
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
  </Form.Group>
  <Button variant="outline-info" type="submit" onClick={ handleSignUp}>
    Sign-Up
  </Button>
  <Button variant="info" type="submit" onClick={handleLogin}>
    Login
  </Button>
</Form>
<div>
  <Profile user={user} userLog={userLog}/>
</div>


  </div>;
};

export default Signin;
