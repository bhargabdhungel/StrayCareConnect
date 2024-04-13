import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { atTheBottomAtom } from "../store";
import useFetch from "../hooks/useFetch";

export default function Posts() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const bottom = useRecoilValue(atTheBottomAtom);

  useEffect(() => {
    if (bottom) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [bottom]);

  const { loading, response } = useFetch({
    method: "GET",
    path: "/user/posts",
    params: page,
  });

  useEffect(() => {
    if (response) setData((prevData) => [...prevData, ...response.data]);
  }, [response]);

  return (
    <div className="bg-gray-300 w-full h-fit gap-1 flex flex-col">
      {data.map((post, index) => {
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
            <img src={post.imageUrl} alt="image" className="w-64" />
            <p>
              {time}, {date}
            </p>
          </div>
        );
      })}
      <div>
        {loading && <p>Loading...</p>}
        {!loading && <p>End</p>}
      </div>
    </div>
  );
}
