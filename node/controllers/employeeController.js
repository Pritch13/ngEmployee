const express = require('express');
var router = express.Router();

var { Employee } = require('../models/employee');

router.get('/', (req, res)=> {
    Employee.find((err, docs)=> {
        if(!err) { res.send(docs); }
    });
});

router.get('/:id', (req, res)=> {
    Employee.findById(req.params.id, (err,doc)=> {
        if(!err) {
            res.send(doc);
        } else {
            console.log("Error with id " + JSON.stringify(err, undefined, 2));  
        }
    });
});

router.post('/', (req,res)=> {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc)=> {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Saving error " + JSON.stringify(err, undefined, 2)); 
        }
    });
});

router.put('/:id', (req,res)=> {
    var emp = ({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true}, (err, doc)=> {
        if(!err) {
            res.send(doc);
        } else {
            console.log("Update error " + JSON.stringify(err, undefined, 2)); 
        }
    });
});

router.delete('/:id', (req,res)=> {
    Employee.findByIdAndRemove(req.params.id, (err, doc)=> {
        if(!err) {
            res.send(doc);
        } else {
            console.log("Delete error " + JSON.stringify(err, undefined, 2)); 
        }
    })
})

module.exports = router;