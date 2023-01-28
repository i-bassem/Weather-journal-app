
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
//Middleware
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder(Server side code connecting with client side code)
app.use(express.static('website'));


// Setup Server
const port = 8000 ;
const server = app.listen(port, listening);
function listening(){
    console.log(`running on local host : ${port}`)
};

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Setup GET route
//
app.get('/all', getData)

function getData(req, res){
    res.send(projectData);
    //const projectData = [];
}

// Setup POST route

app.post('/add', postData);

function postData(req, res){
    projectData = req.body;
    console.log(projectData);
    res.send(projectData);
    console.log(req.body);

};
