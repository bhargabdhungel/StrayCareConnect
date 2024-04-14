import { useNavigate } from "react-router-dom";

export default function Menu() {
  const menuItems = [
    "Home",
    "Profile",
    "Chat",
    "Settings",
    "Sponsor",
    "Donate",
    "addPost",
    "Adopt",
  ];
  const navigate = useNavigate();
  return (
    <div className="w-1/3 overflow-y-auto h-full flex flex-col gap-4 pt-4">
      {menuItems.map((item) => (
        <div
          key={item}
          className="p-2 cursor-pointer"
          onClick={() => {
            if (item.toLocaleLowerCase() == "home") navigate("/home");
            else navigate("/home/" + item.toLocaleLowerCase());
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
