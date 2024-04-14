/* eslint-disable  */

import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { atTheBottomAtom, postTypeAtom, postIdAtom } from "../store";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Button from "./Button";

export default function Sponsor() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const bottom = useRecoilValue(atTheBottomAtom);
  const setSponsorId = useSetRecoilState(postIdAtom);
  const setpostType = useSetRecoilState(postTypeAtom);

  useEffect(() => {
    if (bottom) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [bottom]);

  const { loading, response } = useFetch({
    method: "GET",
    path: "/user/sponsor",
    params: page,
  });
  console.log(response);

  useEffect(() => {
    if (response) setData((prevData) => [...prevData, ...response.data]);
  }, [response]);

  const isOrg = localStorage.getItem("isOrg");
  return (
    <div className="bg-gray-300 w-full h-fit gap-1 flex flex-col">
      {isOrg && (
        <a href="/home/addSponsorPost">
          <Button primary>Add animal for sponsorship</Button>
        </a>
      )}

      {data.map((post, index) => {
        const uploadDate = new Date(post.createdAt);
        const time = uploadDate.toLocaleTimeString();
        const date = uploadDate.toLocaleDateString();

        return (
          <div key={index} className="bg-white p-4"
            onClick={() => {
              const id = post._id;
              setSponsorId(id);
              setpostType("Sponsor");
              navigate("/home/view");
              
            }}
          >
            <p>{index}</p>
            <p>owner={post.userId.username}</p>
            <p>{post.name}</p>
            <p>{post.age} years</p>
            <p>{post.gender} </p>
            <p>{post.description}</p>
            <p>{post.monthlyBudget} rupia dedo please</p>
            <img src={post.image} alt="image" className="w-64" />
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
