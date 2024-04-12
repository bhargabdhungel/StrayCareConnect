import { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData";
import toast from "react-hot-toast";
import { useRecoilValue } from "recoil";
import { atTheBottomAtom } from "../store";

export default function Posts() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const bottom = useRecoilValue(atTheBottomAtom);

  useEffect(() => {
    if (bottom) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [bottom]);

  useEffect(() => {
    const getData = async (page) => {
      try {
        const response = await fetchData({
          method: "GET",
          url: import.meta.env.VITE_SITELINK + "/user/posts",
          token: localStorage.getItem("token"),
          params: { page },
        });
        setData((prevData) => [...prevData, ...response.data]);
      } catch (err) {
        toast.error("Check Internet Connection");
      }
    };
    getData(page);
  }, [page]);

  return (
    <div className="bg-red-300 w-full">
      {data.map((post, index) => {
        return (
          <div key={index} className="bg-white p-4 m-4 rounded-md">
            <p>{index}</p>
            <p>{post.userId.username}</p>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
