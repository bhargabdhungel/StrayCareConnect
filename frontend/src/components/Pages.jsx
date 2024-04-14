import { Route, Routes } from "react-router-dom";
import Sponsor from "./Sponsor";
import Posts from "./Posts";
import Profile from "./Profile";
import Donate from "./Donate";
import Adopt from "./Adopt";
import Settings from "./Settings";
import { useRecoilState } from "recoil";
import { atTheBottomAtom } from "../store";
import AddPost from "./AddPost";
import AddSponsorPost from "./AddSponsorPost";
import AddAdoptionPost from "./AddAdoptionPost";
import ApplyForMembership from "./ApplyForMembership";
import View from "./View";

export default function Pages() {
  const [bottom, setBottom] = useRecoilState(atTheBottomAtom);

  return (
    <div
      className="w-2/3 overflow-y-auto"
      onScroll={(e) => {
        if (
          e.target.scrollTop + e.target.clientHeight + 400 >=
          e.target.scrollHeight
        ) {
          if (!bottom) setBottom(true);
        } else {
          if (bottom) setBottom(false);
        }
      }}
    >
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/view" element={<View />} />
        <Route path="/addSponsorPost" element={<AddSponsorPost />} />
        <Route path="/addAdoptionPost" element={<AddAdoptionPost />} />
        <Route path="/applyForMembership" element={<ApplyForMembership />} />
      </Routes>
    </div>
  );
}
