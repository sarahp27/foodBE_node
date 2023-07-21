const mongoose = require("mongoose");
const { version } = require("os");

const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      validate: {
        validator: Number.isInteger,
      },
    },
  },
  { versionKey: false }
);

const FoodModel = mongoose.model("FoodModel", FoodSchema);

module.exports = FoodModel;
