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
        </Row>
      </Form>
      <div>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>My Logs</th>
      <th>Created</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{newLog}</td>
      {/* {userLogs.map(item => <td>{item}</td>)} */}
      <td>{moment().format('MMMM Do YYYY, h:mm:ss a') || 'N/A'}</td>
    </tr>
  </tbody>
</Table>
<Col xs="auto">
            <Button type="submit" className="mb-2" variant="info" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Col>
</div>
      {/* <ul>
        
      </ul> */}
    </div>
  )
}

export default WorkoutLog;
