import { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData";
import toast from "react-hot-toast";

export default function Posts() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // method, url, token, body, params

  useEffect(() => {
    const getData = async (page) => {
      try {
        const response = await fetchData({
          method: "GET",
          url: import.meta.env.VITE_SITELINK + "/user/posts",
          token: localStorage.getItem("token"),
          params: { page },
        });

        console.log(response);
      } catch (err) {
        toast.error("Check Internet Connection");
      }
    };
    getData(page);
  }, [page]);

  return (
    <div className="bg-red-300 w-full">
      <h1>Posts</h1>
    </div>
  );
}
