let activePage = 'todo'


const TimeManager = require('als-time-manager');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const routes = require('./routes')
// const timeManager = new TimeManager();

dotenv.config();
const app = express();

// middleware
app.use(bodyParser.json());
// other middleware?


sequelize.authenticate()
.then(() => {
    console.log('Database connection successful')
})
.catch(err => {
    console.error('Database connection failed:', err);
});

// Route Def
app.use('/api', routes);

// error for middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });

// starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

