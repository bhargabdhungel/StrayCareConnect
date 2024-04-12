import mongoose from "mongoose";

const orgUserSchema = new mongoose.Schema(
  {
    orgname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sponsorPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrgPost" }],
    isVerified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const OrgUser = mongoose.model("OrgUser", orgUserSchema);

export default OrgUser;
