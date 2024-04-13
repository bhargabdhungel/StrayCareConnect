import toast from "react-hot-toast";
import fetchData from "../helpers/fetchData";
import { useState } from "react";

export default function AddPost() {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="bg-gray-300 w-full h-fit gap-1 flex flex-col">
      <div className="bg-white p-4">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
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
        />
        <button
          className="bg-blue-500 text-white p-2"
          onClick={async () => {
            try {
              setLoading(true);
              const resp = await fetchData({
                method: "POST",
                url: import.meta.env.VITE_SITELINK + "/user/post",
                token: localStorage.getItem("token"),
                body: { content, image },
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
  );
}
