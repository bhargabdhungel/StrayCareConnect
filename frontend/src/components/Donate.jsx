/* eslint-disable  */

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { atTheBottomAtom } from "../store";
import useFetch from "../hooks/useFetch";
import Button from "./Button";
function Donate() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const bottom = useRecoilValue(atTheBottomAtom);
  const isOrg = localStorage.getItem("isOrg");

  useEffect(() => {
    if (bottom) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [bottom]);

  const { response } = useFetch({
    method: "GET",
    path: "/user/orgs",
  });
  console.log(response);

  useEffect(() => {
    if (response) setData((prevData) => [...prevData, ...response.data]);
  }, [response]);

  return (
    <div className="bg-gray-300 w-full h-fit gap-1 flex flex-col">
      {!isOrg && (
        <a href="/home/applyForMembership">
          <Button primary>Apply as Organization</Button>
        </a>
      )}

      {data.map((orgs, index) => {
        return (
          <div key={index} className="bg-white p-4">
            <p>{index}</p>
            <p>owner={orgs.username}</p>
            <p>{orgs.email}</p>
            <p>{orgs.address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Donate;
