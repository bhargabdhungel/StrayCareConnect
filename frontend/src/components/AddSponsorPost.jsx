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

export default function AddSponsorPost() {
  const menuItems = [];

  for (let i = 1; i <= 10; i++) {
    menuItems.push(
      <MenuItem key={i} value={i}>
        {i} year
      </MenuItem>
    );
  }
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [Name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState(0);
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
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={(e) => setAge(e.target.value)}
        >
          {menuItems}
        </Select>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"LGBTQIA"}>LGBTQIA+</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">Animal Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={animalType}
            label="Gender"
            onChange={(e) => setAnimalType(e.target.value)}
          >
            <MenuItem value={"Dog"}>Dog</MenuItem>
            <MenuItem value={"Cat"}>Cat</MenuItem>
            <MenuItem value={"Cow"}>Cow</MenuItem>
            <MenuItem value={"Bird"}>Bird</MenuItem>
            <MenuItem value={"Horse"}>Horse</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Monthly Budget"
          type="number"
          value={monthlyBudget}
          onChange={(e) => setMonthlyBudget(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />

        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></TextField>
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
                  url: import.meta.env.VITE_SITELINK + "/user/sponsor",
                  token: localStorage.getItem("token"),
                  body: {
                    Name,
                    age,
                    gender,
                    image,
                    description,
                    animalType,
                    monthlyBudget,
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
