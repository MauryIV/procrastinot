// Importing the required modules.
const router = require("express").Router(); // Express router

// Importing route modules for different sections
const apiRoutes = require("./api"); 
const landingRoutes = require("./landingRoutes"); 
const todoRoutes = require("./todoRoutes"); 
const workingRoutes = require("./workingRoutes"); 
const completedRoutes = require("./completedRoutes"); 

// Registering routes for each section of the application
router.use("/api", apiRoutes); 
router.use("/", landingRoutes); 
router.use("/todo", todoRoutes); 
router.use("/working", workingRoutes); 
router.use("/completed", completedRoutes); 

module.exports = router; // Exporting the router for use in the application.
