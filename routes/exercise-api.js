

const Workout = require("../models/workout");
const express = require("express");
// const db  = require("./models");
var app        = express();


app.post("/api/workouts", (req, res) => {
    
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });



app.get("/api/workouts", (req,res)=>{
    // console.log(response);
    Workout.find()
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err=>{
        res.sendStatus(400);
    });
    
});

app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      // "runValidators" will ensure new exercises meet our schema requirements
      { new: true, runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
      .then(dbWorkouts => {
        console.log(dbWorkouts)
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.delete("/api/workouts", ( req, res) => {
    Workout.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports=app;


