const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Post schema
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
    isDraft: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: "default.jpg",
    },
    isFirstPost: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create the Post model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
