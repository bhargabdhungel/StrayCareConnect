import User from "../../models/user.js";
import uploadBase64ToCloudinary from "../../utils/imageUpload.js";

const applyForMembership = async (req, res) => {
  try {
    const { Name, image, address, goal, contactNo } = req.body;
    const base64Image = image?.split(",")[1];

    const filename = `userImage/${req.userId}.jpeg`;
    console.log(filename);
    var urlLink;
    if (base64Image !== undefined) {
      urlLink = await uploadBase64ToCloudinary(base64Image, filename);
    }
    console.log("i am not here");
    console.log(urlLink);
    const updatedUserData = {
      name: Name,
      image: urlLink,
      address,
      goal,
      contactNo,
    };

    const user = await User.findByIdAndUpdate(req.userId, updatedUserData, {
      new: true,
    });

    return res.status(200).json({
      message: "You will hear from us soon",
      good: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default applyForMembership;
