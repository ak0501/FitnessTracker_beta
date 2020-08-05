

const Workout = require("../models/workout");
const express = require("express");
// const { response } = require("../server");
var app        = express();


app.post("/api/exercise",(req,res)=>{
    console.log(res);
    Workout.create({})
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.sendStatus(400);
    });
});

app.get("/api/exercise", (req,res)=>{
    // console.log(response);
    Workout.find()
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err=>{
        res.sendStatus(400);
    });
    
});
module.exports=app;
