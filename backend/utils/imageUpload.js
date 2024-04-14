import { v2 as cloudinary } from "cloudinary";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload Base64 image to Cloudinary and get the link
async function uploadBase64ToCloudinary(base64String, filename) {
  try {
    // Convert Base64 string to Blob
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpeg" });

    const formData = new FormData();
    formData.append("file", blob, filename);
    formData.append("upload_preset", "mbptyl5f");

    // Upload to Cloudinary
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        cloudinary.config().cloud_name
      }/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    console.error("Error response data:", error.response.data);
    console.error("Error response status:", error.response.status);
    return null;
  }
}

export default uploadBase64ToCloudinary;
