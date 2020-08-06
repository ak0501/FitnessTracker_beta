const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(

    {
        day: {
            type: Date,
            default: () => new Date()
        },

        exercises: [{
            type: {
                type: String,
                trim: true,
                required: "Exercise type is required"
            },
            name: {
                type: String,
                trim: true,
                required: "Exrcise name is required"

            },
            duration: {
                type: Number,
                trim: true,
                required: "Exercise duration is required"
            },
            weight: {
                type: Number,
                trim: true,
                required: "number is Required"
            },
            reps: {
                type: Number,
                trim: true,
                required: "number is Required"
            },
            sets: {
                type: Number,
                trim: true,
                required: "number is Required"
            }
        }]
    },
    {
        toJSON: {
          // include any virtual properties when data is requested
          virtuals: true
        }
    });



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;