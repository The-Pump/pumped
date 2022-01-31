import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';

/*when a user clicks a category on the home page, they should be redirected to a category page with all the workouts from that category listed
*/
const WorkoutComponent = (props) => {
  const { item } = props
  //use hooks for state management, take the props you need for workout name, description and an input are for intensity

   //use hooks for state management, take the props you need for workout name, description and an input are for intensity

  //create a context file to render the data  
  const [plans, setPlan] = useState(['bursts', 'calisthenics', 'deadlifts'])

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addWorkoutToPlan = () => {
    return axios()
  }

  return (
    <div className="card-background">
      <h2>{item.name}</h2>
      {/* <img  src="../images/Logo.png" style={
        { height: '18rem',
          borderRadius: '30px'
        }
      } alt="logo"/> */}
      <div className="card-button">
      <Button variant="info" onClick={handleShow}>
          See More
        </Button>
      </div>
        <Modal
        show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title key={item.id}>{item.name}</Modal.Title>
          </Modal.Header>
    <Modal.Body>{item.description.slice(3,-4)}</Modal.Body>
          <Modal.Footer>
            <Button variant="outline-info"onClick={handleClose}>
              Close
            </Button>
            <DropdownButton variant="outline-info" title="Add to Workout Plan">
              {plans.map((plan, i) => {
                return <Dropdown.Item onClick={addWorkoutToPlan} key={plan + i}>{plan}</Dropdown.Item>
              })}
            </DropdownButton>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default WorkoutComponent;
