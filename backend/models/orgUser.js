import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    image: { type: String, required: true },
    age: { type: Number, required: true },
    animalType: {
      type: String,
      enum: ["Dog", "Cat", "Cow", "Bird", "Horse"],
      required: true,
    },
    description: { type: String, required: true },
    monthlyBudget: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const orgUserSchema = new mongoose.Schema(
  {
    orgname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sponsorPost: [{ type: postSchema, required: true }],
    isVerified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const orgUser = mongoose.model("OrgUser", orgUserSchema);
export default orgUser;
