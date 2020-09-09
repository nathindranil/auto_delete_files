var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    ttl = require('mongoose-ttl');

app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))

var taskSchema = mongoose.Schema({
  taskName: String,
  taskDescription: String,
  creator: String,
  duration: String,
  createdAt: String
})
taskSchema.plugin(ttl, {ttl:5000, reap:false})


var Task = mongoose.model("Task", taskSchema)

mongoose.connect("mongodb+srv://indranil:123456a@tasks.3tk4j.mongodb.net/board_infinity?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })


app.get("/", function(req, res) {
  Task.find({}, function(err, task) {
      res.render("homepage", {tasks:task})
  })
})

app.get("/add", function(req, res) {
  res.render("task")
})

app.post("/add", function(req, res) {
  Task.create(req.body.task, function(err, task) {
    if(err) {
      console.log(err)
    } else {
      var some_variable = new Date()
      var time_string_utc = some_variable
      var time_string_utc_epoch = Date.parse(time_string_utc)
      var time_utc = new Date();
      time_utc.setTime(time_string_utc_epoch)
      task.createdAt = time_utc

      var dur = task.duration;
      task.ttl = dur;
      task.save();
      res.redirect("/")
    }
  })
})

app.listen(process.env.PORT, function() {
  console.log("Server has started!")
})

app.listen(8000, function() {
  console.log("Server has started!")
})
