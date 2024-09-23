const express = require('express')

const router = express.router()

const Projects = require('../models/projectModel')

router.get('/all',async(req,res) =>{
    try{
        const fetchedProjects = await Projects.find()
        res.json(fetchedprojects).status(200)
    } catch(error) {
        res.json(error).status(500)
    }
})

router.post('/add',async (req,res) => {
    try{
        const newprojectdata = await new Projects(req.body)
        const {title,desc} = newprojectdata 
        if(!title || !desc)
        {
            res.json({message: "Title & Desc Required"}).status(500)
        }
        const savedata = await newprojectdata.save()
        res.json(savedata).status(201)
    }
    catch(error)
    {
        res.json(error).status(500)
    }
})
