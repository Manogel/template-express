const { Schema, model } = require("mongoose");

const ExampleSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    description: String,
    avatar: {
      type: String,
      required: true
    },
    relation: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = model("Example", ExampleSchema);
