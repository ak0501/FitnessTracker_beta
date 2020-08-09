const express = require("express");
const Workout = require("../models/workout.js");
var app = express();


app.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put("/api/workouts/:id", ({body,params}, res) => {
  console.log(body);
  console.log(params.id);
  Workout.findByIdAndUpdate(
      params.id, {
        $push: {
          exercises: body
        }
      },
      {
        new: true,
        runValidators: true
      }

    )
    .then(dbWorkout => {
      console.log("success");
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log("error");
      res.json(err);
    });
});



app.get("/api/workouts", (req, res) => {
  // console.log(response);
  Workout.find(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.sendStatus(400);
    });

});

app.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
    .then(dbWorkouts => {

      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

app.delete("/api/workouts", (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = app;