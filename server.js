const express = require('express');
//do this to indicate it is express file

const hostname = 'localhost';
const port = 3000;

const app = express();
//the "app" will retrun express server application


//use method can take callback function which is a middle ware function
//req = which is request object
//res = is the response object
//next = is a function
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
