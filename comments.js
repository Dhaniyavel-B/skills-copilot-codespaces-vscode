//create web server
const express = require('express');
const app = express();
//parse request body
app.use(express.json());
//serve static files
app.use(express.static('public'));
//serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
//serve comments
const comments = [];
app.get('/comments', (req, res) => {
    res.json(comments);
});
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json(comments);
});
//start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});