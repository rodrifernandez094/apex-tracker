import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon";

const Form = () => {
  const [query, setQuery] = useState({ username: "placeholder", platform: "" });
  const [isPressed, setIsPressed] = useState(null);
  const navigate = useNavigate();
  const platforms = [
    { icon: "psn", imgSrc: "/playstation.svg" },
    { icon: "origin", imgSrc: "/windows.svg" },
    { icon: "xbl", imgSrc: "/xbox.svg" },
  ];

  const handleInput = (e) => {
    const username = e.target.value;
    setQuery((prevValue) => {
      return { username: username, platform: prevValue.platform };
    });
  };

  const handlePlatform = (e) => {
    const platform = e.currentTarget.getAttribute("id");
    setQuery((prevValue) => {
      return { username: prevValue.username, platform: platform };
    });
    setIsPressed(platform);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("query", JSON.stringify(query));
    navigate(`/profile/${query.username}`);
  };

  return (
    <form
      className="flex flex-col px-4 py-4 w-full z-10 bg-stone-100 lg:bg-transparent 
    lg:w-2/4 lg:flex-row justify-start"
    >
      <div className="flex justify-center w-full lg:w-2/6">
        {platforms.map((platform) => {
          return (
            <div
              className={`text-center flex items-center h-12 cursor-pointer py-2 px-4 first:rounded-l last:rounded-r
              bg-stone-800  hover:bg-stone-900 ${
                isPressed === platform.icon ? "bg-black" : ""
              }`}
              onClick={handlePlatform}
              id={platform.icon}
              key={platform.icon}
            >
              <Icon imgSrc={platform.imgSrc} logo={platform.icon} />
            </div>
          );
        })}
      </div>
      <input
        onChange={handleInput}
        className="rounded border h-12 border-stone-300 bg-stone-200 text-stone-900 my-4 px-1 
        lg:w-full lg:my-0 lg:rounded-none"
        type="text"
        name="username"
        placeholder="Enter your username. E.g. Fuhhnqq"
      />
      <button
        className="rounded bg-red-500 hover:bg-red-700 transition duration-300 py-2 font-semibold text-white text-center 
        lg:w-2/6 lg:rounded-l-none"
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default Form;
