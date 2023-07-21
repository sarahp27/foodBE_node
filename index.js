const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const mongoose = require('mongoose');
const mongoDb = "mongodb+srv://sarah:DFY4QzTmz9guisHy@cluster0.b3bqcrp.mongodb.net/lunchManagmentSystem?retryWrites=true&w=majority";


console.log("MongoDb is connected ");

mongoose.connect(mongoDb).then((con) => {
    console.log('mongodb connected');
})

app.use(express.json())

const foodRouter = require('./routes/food')
app.use('/food',foodRouter)


app.listen(3001, () => {
  console.log("this app is running on port 3001");
});

