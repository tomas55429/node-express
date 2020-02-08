const express = require('express');
//do this to indicate it is express file

const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;

const app = express();
//the "app" will retrun express server application
app.use(morgan('dev'));
//morgan is a server request logs middleware


app.use(express.static(__dirname + '/public'));
//the line above is what is needed to use express to serve public folders.
//express will automatically serve index.html if a request is sent without the host name
//the __dirname variable refers to the absolute path of the current directory of the file. 



//use method can take callback function which is a middle ware function
//req = which is request object
//res = is the response object
//next = is a function
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
