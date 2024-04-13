import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
export default function Profile() {
  const [ProfileData, setProfileData] = useState(null);

  const { loading, response } = useFetch({
    method: "GET",
    path: "/user/me",
  });

  useEffect(() => {
    if (response) {
      setProfileData(response.data);
    }
  }, [response]);

  if (loading) return <p>Loading...</p>;
  console.log(ProfileData);
  return (
    <div>
      <h1>{ProfileData?.username}</h1>
      <p>{ProfileData?.email}</p>
    </div>
  );
}
