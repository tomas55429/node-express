const express = require('express');
const bodyParser = require('body-parser');

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});
//The above route method is a shortened method of the below commented out method. 




// app.all('/campsites', (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain'); //a plain text will be sent back on response body
//     next(); //pass control of the application method to the next relevant application method if 
//     //request is method is a get it will go there if it is a post it will jump to post method. 
            
// });

// app.get('/campsites', (req, res) => {
//     res.end('Will send all the campsites to you');
// });


// //posting a data to the server
// app.post('/campsites', (req, res) => {
//     res.end(`will add the campsite: ${req.body.name} wth description: ${req.body.description}`);
// });

// //Updating a data on the server
// app.put('/campsites', (req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /campstes');
// });

// app.delete('/campsites', (req, res) => {
//     res.end('Deleting all campsites');
// })


module.exports = campsiteRouter;
//exporting the module so it can be called in different files. 