const express = require('express')
const router = express.Router();
const TaskSchema = require ("../model/Task")
const { SchemaType } = require("mongoose");



router.post('/add-task', async (req,res) => {

    const {title, description, status, priority, createdAt} = req.body ;

    try {
        const existingTask = await TaskSchema.findOne({title});
        if (existingTask){
            res.json({message: "Already Exist"})
        }

        const newTask = new TaskSchema({
            title, description, status, priority, createdAt
        })

        await newTask.save()
        res.json("Successfull")


    } catch(error){
        res.json ("Error")
        console.log(error)
    }
})

router.get('/tasks', async (req,res)=> {
    const tasks = await TaskSchema.find()
    res.json(tasks)

})

router.get('/tasks/:id', async (req,res)=> {
    const {id} = req.params;
    const tasks = await TaskSchema.findById(id)
    res.json(tasks)

})


router.put('/tasks/:id', async (req,res)=> {
    const {id} = req.params;
    const {title, description, status, priority, createdAt} = req.body ;
    const updatedRecipes = await TaskSchema.findByIdAndUpdate(
        id, {
            title, description, status, priority, createdAt        }
    )

    res.json("Updated")

})


router.delete('/tasks/:id', async (req,res)=> {
    const {id} = req.params;
    const tasks = await TaskSchema.findByIdAndDelete(
        id
    )

    res.json("deleted")

})


module.exports = router;