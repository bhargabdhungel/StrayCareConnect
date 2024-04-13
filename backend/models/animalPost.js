import mongoose from "mongoose";

const animalPostSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
    animalType: {
      type: String,
      enum: ["Dog", "Cat", "Cow", "Bird", "Horse"],
      required: true,
    },
    monthlyBudget: { type: Number },
    postType: {
      type: {
        adoption: Boolean,
        sponsor: Boolean,
      },
      default: {
        adoption: true,
        sponsor: false,
      },
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AnimalPost", animalPostSchema);
