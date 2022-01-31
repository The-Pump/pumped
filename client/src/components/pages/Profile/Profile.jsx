import React from 'react'
import { Table, Button } from 'react-bootstrap';

//when user clicks profile on home page they should be redirected to a profile page that has a card with their username, created workouts, and workout plans
function Profile({ user, userLog }) {
  return (
    <div>
      <h2>User Profile</h2>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Username</th>
      <th>My Logs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user}</td>
      <td>{userLog || 'N/A'}</td>
    </tr>
  </tbody>
</Table>
    <Button variant="info">Edit</Button>
    </div>
  )
}

export default Profile
