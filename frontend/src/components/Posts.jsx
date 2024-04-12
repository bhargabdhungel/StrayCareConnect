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
    <div className="bg-gray-300 w-full h-fit gap-1 flex flex-col">
      {data.map((post, index) => {
        console.log(post);
        const uploadDate = new Date(post.createdAt);
        const time = uploadDate.toLocaleTimeString();
        const date = uploadDate.toLocaleDateString();

        return (
          <div key={index} className="bg-white p-4">
            <p>{index}</p>
            <p>{post.userId.username}</p>
            <p>{post.content}</p>
            <p>{post.likes} Likes</p>
            <p>{post.comments?.length} Comments</p>
            <img src={post.imageUrl} alt="image" />
            <p>
              {time}, {date}
            </p>
          </div>
        );
      })}
    </div>
  );
}
