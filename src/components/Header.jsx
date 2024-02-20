import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Header = ({ category, title }) => {
  const { currentMode } = useStateContext();

  return (
    <div className="mb-10">
      <p
        className={currentMode === "Light" ? "text-gray-400" : "text-gray-300"}
      >
        {category}
      </p>
      <p
        className={`text-3xl font-extrabold tracking-tight ${
          currentMode === "Light" ? "text-slate-900" : "text-white"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;
