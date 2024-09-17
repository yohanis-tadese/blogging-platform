const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "default.jpg",
    },
  },
  {
    timestamps: true,
  }
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
