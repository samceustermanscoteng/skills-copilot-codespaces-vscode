// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
// 4. Start the server
app.listen(3000, () => {
    console.log('Server started');
});

// Path: comments.js
// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.get('/comments', (req, res) => {
    res.send('Comments');
});
// 4. Start the server
app.listen(3000, () => {
    console.log('Server started');
});

// Path: comments.js
// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.get('/comments', (req, res) => {
    res.send('Comments');
});
app.get('/comments/:id', (req, res) => {
    res.send(`Comment ${req.params.id}`);
});
// 4. Start the server
app.listen(3000, () => {
    console.log('Server started');
});

// Path: comments.js
// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.get('/comments', (req, res) => {
    res.send('Comments');
});
app.get('/comments/:id', (req, res) => {
    res.send(`Comment ${req.params.id}`);
});
app.post('/comments', (req, res) => {
    res.send('Comment created');
});
// 4. Start the server
app.listen(3000, () => {
    console.log('Server started');
});

// Path: comments.js
// Create web server
// 1. Import express
const