const { Router } = require('express');
const axios = require('axios');
const { signup, login, deleteUser } = require('./user');
const { getWorkoutPlan, createWorkoutPlan, addToWorkoutPlan } = require('./workoutPlan');
const { addWorkout } = require('./workout');
const { addToUserLog } = require('./userLog');

const pumpedRouter = Router();

/* routes pointing to functions that interface with the tables
 in the db. */

// --------change these------
pumpedRouter.post('/signup', signup);

// pumpedRouter.get('/login', login);
//---------------
/* I want to add a workout to a workout plan, but how can I add
a workout to workouts table while also adding the associative ids
so that the workout belongs to the selected plan? */
pumpedRouter.put('addToWorkoutPlan', addToWorkoutPlan);

pumpedRouter.post('/createWorkoutPlan', createWorkoutPlan);

pumpedRouter.get('/workoutPlan', getWorkoutPlan);

pumpedRouter.post('/addWorkout', addWorkout);

pumpedRouter.post('/addToUserLog', addToUserLog);

pumpedRouter.delete('/deleteUser/:username', deleteUser);

pumpedRouter.get('/workoutsByCategory', async (req, res) => {
  const result = await axios.get('https://wger.de/api/v2/exercise/?language=2&limit=100');
  console.log(result.data.results);
  res.send(result.data.results);
});

pumpedRouter.get('/searchWorkouts', async (req, res) => {
  const result = await axios.get('https://wger.de/api/v2/exercise/?language=2&limit=100');
  console.log(result.data.results);
  res.send(result.data.results);
});

module.exports = { pumpedRouter };
