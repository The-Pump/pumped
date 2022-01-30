import React, { useState } from 'react';
import axios from 'axios';
import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

const WorkoutLog = () => {

  const [userLogs, setUserLogs] = useState([]);
  const [newLog, setNewLog] = useState('');
  const [username, setUsername] = useState('')
  //handlechange
  const handleChange = (e) => {
    setNewLog(e.target.value);
    console.log(newLog)
  }

  const handleUserChange = (e) => {
    setUsername(e.target.value);
    console.log(username);
  }

  //handle submit
  const handleSubmit = () => {
    //send post request with user id to users workout logs
    axios.post(`/api/router/addToUserLog/:${username}`, newLog)
      .then((newLog) => {
        //update userLogs on screen to show it was added
        setUserLogs(userLogs => [...userLogs, newLog]);
      })
      .catch((err) => {
        console.error("can't save log", err)
      })
  }


  //handledelete
  const handleDelete = () => {
    //send delete request with user id to users workout logs
    axios.delete('', log)
  }

  return (
    <div>
      <h2>WorkoutLog</h2>
      <Form>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl id="inlineFormInputGroup" placeholder="Username" value={username} onChange={handleUserChange} />
            </InputGroup>
          </Col>
          <InputGroup className="mb-2">
            <InputGroup.Text>LOG</InputGroup.Text>
            <FormControl id="inlineFormInputGroup" placeholder="Describe Your Experience" value={newLog} onChange={handleChange} />
          </InputGroup>
          <Col xs="auto">
            <Button type="submit" className="mb-2" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <ul>
        {userLogs.map(item => <li>{item}</li>)}
      </ul>
    </div>
  )
}

export default WorkoutLog;
