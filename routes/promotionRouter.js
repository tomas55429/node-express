const express = require('express');
const bodyParser = require('body-parser');

const promotonRouter = express.Router();


promotonRouter.use(bodyParser.json());

promotonRouter.route('/promotions')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotons to you');
})
.post((req, res) => {
    res.end(`Will add the promoton: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotons');
})
.delete((req, res) => {
    res.end('Deleting all promotons');
});




promotonRouter.route('/:promotonId')
.all((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    next();
  })


//get method and save as promotonId
.get((req, res) => {
    res.end(`Will send details of the promoton: ${req.params.promotonId} to you`);
})
//posting a data of a particular item on the server not supported
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotons/${req.params.promotonId}`);
})
//Updating data of a particular item on the server
.put((req, res) => {
    res.write(`Updating the promoton: ${req.params.promotonId}\n`);
    res.end(`Will update the promoton: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting promoton: ${req.params.promotonId}`);
});






module.exports = promotonRouter;
