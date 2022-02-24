# The Pumped Gym

### Overview
This app is intended to be a hub for a user to easily plan out exercises with a weekly schedule feature that lists 
the workout plans they have created. As it stands, users can search for exercises or browse by category and write in
 a workout log. The schema has been built out with sequelize and the relationships between tables are defined in 
 associations.js. Each users' workout plans were to be stored in a database so they could be accessed by a logged in 
 user, but at the time of submission the Google OAuth with passport was incomplete.  Once the user is able to log in, then 
 the features can be interacted with in terms of a logged in user context, who's unique id is the source of relational 
 data.

 ### Starting application

Navigate to the pumped directory, and execute the following in your
terminal:


1. Type ’npm install’ to install dependencies.
2. Start a mysql server.
3. Create a database called 'pumpdb' inside the mysql shell.
4. run the 'associations.js' file with node to sync all tables with the database. There is also a 'db.drop()' a few lines above 
   that can be run to drop all tables as necessary. 
4. Run the build script with ’npm run build’ to start the compile process with Webpack. The --watch command will keep the build running. 
5. In a separate terminal, enter ‘npm start’. This will execute the file ‘server/index.js’ with nodemon. 
6. Navigate to localhost:3000 in your web browser to view the app.

### API info

you can access all functionality need without an API key. all you will need
is this route (https://wger.de/api/v2/). More information on this can be found in '\client\src\config\api.js'.
