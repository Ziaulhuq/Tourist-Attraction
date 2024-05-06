import React from "react";

const Nav = () => {
  return (
    <div className="h-20 w-full bg-lime-700 flex justify-between items-center pr-7 pl-7 fixed top-0 left-0 right-0 z-10">
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="search..."
          className="w-80 h-9 rounded-lg pl-2 outline-none"
        />
      </div>
    </div>
  );
};

export default Nav;
