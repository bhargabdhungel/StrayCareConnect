import AnimalPost from "../../models/animalPost.js";
import uploadBase64ToCloudinary from "../../utils/imageUpload.js";

const addSponsorPost = async (req, res) => {
    try {
        const { name, age, gender, image, description } = req.body;
        const base64Image = image?.split(",")[1];

        const filename = `sponsorImage/${req.userId}.jpeg`;

        var urlLink;
        if (base64Image !== undefined) {
          urlLink = await uploadBase64ToCloudinary(base64Image, filename);
        }
        const sponsorPost = new AnimalPost({
          name,
          age,
          gender,
          image:urlLink,
          description,
          postType: { adoption: false, sponsor: true },
          userId: req.userId,
        });
        const savedPost = await sponsorPost.save();

        return res.status(200).json({
            message: " Sponsor Post added successfully",
            good:true,
        })
        
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default addSponsorPost;
