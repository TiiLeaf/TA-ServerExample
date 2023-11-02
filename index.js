const express = require('express');
const app = express();
const port = 3000;
const dataDir = `${__dirname}/data`; //stores the example data for the responses
const printReqests = true;

/* Logger middleware for testing */
if (printReqests)
    app.use((req, res, next) => {
        console.log(`[${req.method}] ${req.url}
            Headers: ${JSON.stringify(req.headers)}
        `);
        next();
    });

/* Return the name and id of all the testplans in the account specified by the bearer token */
app.get('/testplans/', (req, res) => {
    var authToken = req.headers.authorization || "";
    authToken = authToken.split('Bearer ')[1];

    if (!authToken) {
        res.send({
            "error": {
                status: 401,
                message: "A valid Bearer token was not provided."
            }
        });
    } else {
        res.sendFile('exampleTestplanList.json', { root: dataDir });
    }
});

/* Return the content of a specific testplan by ID, from the account specified by the bearer token */
app.get('/testplans/:id', (req, res) => {
    var authToken = req.headers.authorization || "";
    authToken = authToken.split('Bearer ')[1];

    if (!authToken) {
        res.send({
            "error": {
                status: 401,
                message: "A valid Bearer token was not provided."
            }
        });
    } else if (!req.params.id) { //this block will actually never execute due to express routing, it is just standing as a placeholder for the real id validation logic
        res.send({
            "error": {
                status: 401,
                message: "A valid testplan ID was not provided."
            }
        });
    } else {
        res.sendFile('exampleTestplan.json', { root: dataDir });
    }
});

/* 404 middleware */
app.use((req, res) => {
    res.sendFile('404.json', { root: dataDir });
});

/* start listening */
app.listen(port, () => {
    console.log(`Express server listening on port ${port}.`);
});