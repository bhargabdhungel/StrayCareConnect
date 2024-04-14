/* eslint-disable  */
import toast from "react-hot-toast";
import fetchData from "../helpers/fetchData";
import { useState } from "react";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
// import {InputLabel } from "@mui/material"
import NumberInputBasic from "./NumberInput";

export default function ApplyForMembership() {
  const menuItems = [];

  const [Name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState("");
  const [goal, setGoal] = useState("");
  const [contactNo, setContactNo] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="bg-gray-300 w-full h-fit gap-1 flex flex-col">
      <div className="bg-white p-4">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        ></TextField>

        <br />

        <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={4}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></TextField>
        <TextField
          id="outlined-multiline-static"
          label="Your Goal"
          multiline
          rows={4}
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        ></TextField>
        <TextField
          label="Contact Number"
          type="number"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className="flex justify-between items-center w-48 gap-2 mt-12">
          <div className="relative w-24 h-12 flex items-center justify-center bg-green-200 rounded-2xl">
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file.type.startsWith("image")) {
                  return toast.error("Please select an image file!");
                }
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  setImage(reader.result);
                };
              }}
              className="absolute bg-gray-400 w-full h-full inset-0 opacity-0"
            />

            <h1>Add Image</h1>
            {image && (
              <img
                src={image}
                alt="preview"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg w-16"
            onClick={async () => {
              try {
                setLoading(true);
                const resp = await fetchData({
                  method: "POST",
                  url: import.meta.env.VITE_SITELINK + "/user/applyForMembership",
                  token: localStorage.getItem("token"),
                  body: {
                      Name,
                      image,
                      address,
                      goal,
                      contactNo
                  },
                });
                console.log(resp);
                setLoading(false);
              } catch (error) {
                setLoading(false);
                toast.error("Check your internet connection!");
              }
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
