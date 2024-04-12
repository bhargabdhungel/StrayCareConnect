import { Route, Routes } from "react-router-dom";
import Chats from "./Chat";
import Sponsor from "./Sponsor";
import Posts from "./Posts";
import Profile from "./Profile";
import Donate from "./Donate";
import Adopt from "./Adopt";
import Settings from "./Settings";

export default function Pages() {
  return (
    <div className="w-2/3 overflow-y-auto">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
