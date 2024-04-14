import AnimalPost from "../../models/animalPost.js";
import uploadBase64ToCloudinary from "../../utils/imageUpload.js";

const postAdoption = async (req, res) => {
  try {
    const { Name, age, gender, image, description, animalType } = req.body;
    const base64Image = image?.split(",")[1];

    const filename = `sponsorImage/${req.userId}.jpeg`;

    var urlLink;
    if (base64Image !== undefined) {
      urlLink = await uploadBase64ToCloudinary(base64Image, filename);
    }
    const sponsorPost = new AnimalPost({
      name: Name,
      age,
      gender,
      animalType,
      image: urlLink,
      description,
      postType: { adoption: true, sponsor: false },
      userId: req.userId,
    });
    await sponsorPost.save();

    return res.status(200).json({
      message: " Adoption Post added successfully",
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

export default postAdoption;
