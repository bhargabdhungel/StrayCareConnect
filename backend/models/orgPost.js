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
    orgId: { type: mongoose.Schema.Types.ObjectId, ref: "OrgUser" },
  },
  {
    timestamps: true,
  }
);

const OrgPost = mongoose.model("OrgPost", postSchema);
export default OrgPost;
