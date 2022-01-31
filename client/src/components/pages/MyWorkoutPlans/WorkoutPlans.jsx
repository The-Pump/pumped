import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';



//react routing is connected successfully for this component build it out


//should make a get request to the database for a list ofthe signed in user's workout Plans

//each plan list item should have a see more button that renders a WorkoutPLAN component for each of the workouts in a given plan
const WorkoutPlans = () => {

  const [plan, setPlan] = useState('');
  const [workoutPlans, setWorkoutPlans] = useState(['Abs', 'Arms', 'Back', 'Calves', 'Chest', 'Legs', 'Shoulders'])

  //handles input change
  const handleChange = (e) => {

    setPlan(e.target.value);
    console.log(plan);
  }

  //handles click of submit
  const submitWorkoutPlan = (name) => { 
    setWorkoutPlans(workoutPlans => [...workoutPlans , name]);
    const planToSubmit = { name };
    return axios.post('/api/router/createWorkoutPlan', planToSubmit).then(() => {
      setPlan('');
    }).catch((err) => {
      console.warn(err);
    })
  }
  

  //handle click of see exercises
  const handleSeeEx = (e) => {
    //redirect to page with list of workouts
  }

  //handle click of delete
  const handleDelete = (event) => {
    //remove e.target.value from state
    const name = event.target.getAttribute("name")
    setWorkoutPlans(workoutPlans.filter(item => item.name !== name));
  }

  return (
    <div>
     <h2>Make Your Own Workout Plan</h2>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Workout Plan Name</Form.Label>
    <Form.Control type="email" placeholder="New Plan" onChange={handleChange} value={plan}/>
  </Form.Group>
    </Form>
  <Button variant="info" onClick={() => {submitWorkoutPlan(plan)}}>Submit</Button>
    <div>
      {workoutPlans.map((item) => <Card>
  <Card.Header>Plan</Card.Header>
  <Card.Body>
    <Card.Title>{item}</Card.Title>
    <Card.Text>
      Each workout plan consists of a tandom of exercises, You can find them on the home page
    </Card.Text>
    <Button variant="outline-info" href="http://127.0.0.1:3000/">Return Home</Button>
    <Button variant="outline-info" onClick={handleDelete}>Delete</Button>
  </Card.Body>
</Card>)}
    </div>
    </div>
  )
}


export default WorkoutPlans
