// build your `/api/projects` router here
const express = require('express');
const Project = require("./model")
const router = express.Router();

router.get("/", (req, res) => {
    Project.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    })
})

router.post("/", (req, res) => {
   const project = req.body
   
   Project.addProject(project)
   .then(project => {
       res.status(201).json(project);
   })
   .catch(error => {
       res.status(500).json({ message: error.message });
   })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    Project.findProject(id)
    .then(project => {
        if(!project){
            res.status(404).json("Sorry the project with the specified id could not be found")
        } else {
            res.status(200).json(project)
        }
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    }) 
})


module.exports = router;