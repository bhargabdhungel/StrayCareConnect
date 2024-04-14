/* eslint-disable  */

import { useRecoilValue } from "recoil";
import { postIdAtom, postTypeAtom } from "../store";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const View = () => {
  const postId = useRecoilValue(postIdAtom);
  const postType = useRecoilValue(postTypeAtom);
  const [postDetails, setPostDetails] = useState(null);

  const {loading, response } = useFetch({
    method: "GET",
    path: "/user/post",
    params: { postId, postType },
  });
    
  console.log(response);
  useEffect(() => {
    setPostDetails(response);
  },[response]);

  return (
    <div className="min-h-screen pt-[68px] bg-gray-800">
      <div className="flex flex-wrap gap-4 justify-center p-6 mb-12"></div>
    </div>
  );
};

export default View;
