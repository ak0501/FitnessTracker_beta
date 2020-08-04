import express, { urlencoded, json, static } from "express";
import logger from "morgan";
import { connect } from "mongoose";

const PORT = process.env.PORT || 8080;

// const db = require("./models/workout.js");

const app = express();

app.use(logger("dev"));

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

app.use(static("public"));

connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
});

// app.post("/exercise", (req, res) => {
//     db.create(req.body)
//         .then(({s
//             _id
//         }) => db.findOneAndUpdate({}, {
//             $push: {
//                 books: _id
//             }
//         }, {
//             new: true
//         }))
//         .then(dbLibrary => {
//             res.json(dbLibrary);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

app.get("/exercise", (req, res) => {
  console.log("we are here");
  db.find({})
    .then((dbFitness) => {
      res.json(dbFitness);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
