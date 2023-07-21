const express = require("express");
const router = express.Router();

const FoodModel = require("../models/foodmodel");


//get all data 
router.get("/", async (req, res) => {
  try {
    const foods = await FoodModel.find();
    res.json(foods);
  } catch (err) {
    res.send("error" + err);
  }
});

//get data by id

router.get("/:id", async (req, res) => {
    try {
      const foods = await FoodModel.findById(req.params.id);
      res.json(foods);
    } catch (err) {
      res.send("error" + err);
    }
  });

//post the data
router.post("/post", async (req, res) => {
  const food = new FoodModel({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
  });

  try {
    const f = await food.save();
    res.json(f);
  } catch (err) {
    res.send(`Error posting data ${err}`);
  }
});

//delete data by id 

router.delete('/delete', async)



module.exports = router;
