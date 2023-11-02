const express = require('express');
const app = express();
const port = 3000;

//serve static files
app.use(express.static('static'));

//404
app.use((req, res) => {
    res.sendFile('./static/404.json', { root: __dirname });
});

//start listening
app.listen(port, () => {
    console.log(`Express server listening on port ${port}.`);
});