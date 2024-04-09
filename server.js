// Importing required modules
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Imports Sequelize for session management
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Starts Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Creating Handlebars instance with custom helpers
const hbs = exphbs.create({ helpers });

// Session configuration
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 600000,
    httpOnly: true, 
    secure: false, 
    sameSite: 'strict', 
  },
  resave: false, 
  saveUninitialized: true, 
  store: new SequelizeStore({
    db: sequelize 
  })
};

// Adding session middleware to Express app
app.use(session(sess));

// Setting up Handlebars as the template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and URL-encoded data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files.
app.use(express.static(path.join(__dirname, 'public')));

// middleware for routes.
app.use(routes);

// Syncing Sequelize models with database and starting server.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
