const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;



app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true
});

app.use(require("./routes/exercise-api.js"));
app.use(require("./routes/stats-api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
module.exports=app;