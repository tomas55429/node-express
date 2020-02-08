const express = require('express');
//do this to indicate it is express file
const morgan = require('morgan');
//morgan middleware used for server request logs
const bodyParser = require('body-parser');
//the bodyparser mkes changes to the server
const campsiteRouter = require('./routes/campsiteRouter');
//bringing the campsiteRouter from routes folder

const hostname = 'localhost';
const port = 3000;

const app = express();
//the "app" will retrun express server application
app.use(morgan('dev'));
//morgan is a server request logs middleware
app.use(bodyParser.json());

app.use('/campsites', campsiteRouter);
//using the routes folder and giving it a root path route of /campsites



// //get method and save as campsiteId
// app.get('/campsites/:campsiteId', (req, res) => {
//     res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
// });


// //posting a data of a particular item on the server not supported
// app.post('/campsites/:campsiteId', (req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
// });

// //Updating data of a particular item on the server
// app.put('/campsites/:campsiteId', (req, res) => {
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite: ${req.body.name}
//         with description: ${req.body.description}`);
// });

// app.delete('/campsites/:campsiteId', (req, res) => {
//     res.end(`Deleting campsite: ${req.params.campsiteId}`);
// })



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
