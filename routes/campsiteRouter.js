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




campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    next();
  })


//get method and save as campsiteId
.get((req, res, next) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
})
//posting a data of a particular item on the server not supported
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
})
//Updating data of a particular item on the server
.put((req, res, next) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res, next) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});



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