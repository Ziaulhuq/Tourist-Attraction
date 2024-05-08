import React from "react";
import { Places, useState } from "./places";

const Pagination = () => {
  const [tab, setTab] = useState([Places]);
  return (
    <div>
      <button>Tab 1</button>
      <button>Tab 2</button>
      <button>Tab 3</button>
      <button>Tab 4</button>

      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Pagination;
