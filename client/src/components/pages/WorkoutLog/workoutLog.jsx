import React, { useState } from 'react';
import axios from 'axios';
import { Form, Row, Col, Button, InputGroup, FormControl, Table} from 'react-bootstrap';
import moment from 'moment';

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
    let text = newLog;
    const userAndLog = { username, text}
    return axios.post('/api/router/addToUserLog', userAndLog)
      .then((newLog) => {
        //update userLogs on screen to show it was added
        console.log(newLog.data, 30);
        newLog = newLog.data.map(log => {
          let date = new Date(log.createdAt)
          log.createdAt = date.toString().slice(0, 25);
          return log;
        })
        setUserLogs(newLog);
        // console.log(userLogArray, 32)
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
        </Row>
      </Form>
      <div>
<Col xs="auto">
            <Button type="submit" className="mb-2" variant="info" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Col>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>My Logs</th>
    </tr>
  </thead>
</Table>
  </div>
      <ul>
        {userLogs.map(log => <div>{`${username}: ${log.text}`}<li>{log.createdAt}</li></div>)}
      </ul>
    </div>
  )
}

export default WorkoutLog;
