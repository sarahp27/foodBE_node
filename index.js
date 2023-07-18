const express = require('express');
const app = express();
const foodRoute = '/food';
const mongoose = require("mongoose")



const db = `mongodb+srv://sarah:DFY4QzTmz9guisHy@cluster0.b3bqcrp.mongodb.net/lunchManagmentSystem?retryWrites=true&w=majority`

mongoose.connect(db).then((con) => {
    console.log(`mongodb connected`)
})

// Define a sample route
app.get(`${foodRoute}/list`, (req, res) => {
//   res.json({ message: 'birynai khaongi!' });
res.send('Getting all data!')
});

app.post(`${foodRoute}/post`, (req, res) => {
    res.send('Food added to an api')
  })


// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});