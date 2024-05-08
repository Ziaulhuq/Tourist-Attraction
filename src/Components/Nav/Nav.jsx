import React from "react";
import { motion } from "framer-motion";

const svgAnimate = {
  hidden: {
    opacity: 0,
    rotate: 180,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const pathAnimate = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const Nav = () => {
  return (
    <div className="h-20 w-full bg-lime-700 flex justify-between items-center pr-7 pl-7 fixed top-0 left-0 right-0 z-10">
      <div>
        <motion.h1>
          <motion.svg
            width="76px"
            height="76px"
            viewBox="0 0 512 512"
            version="1.1"
            variants={svgAnimate}
            initial="hidden"
            animate="visible"
          >
            <circle cx="284.7" cy="66.7" r="44.4" />

            <polygon
              points="327.9,222 388.4,249.7 459.3,202.4 445.9,174.5 395.3,203.2 301.9,140.8 249.6,140.8 244.8,220.7    240.3,295 299.1,341.4 346.3,378.7 342.3,477.8 382.4,477.8 403.5,344.8 326.3,272.6  "
              variants={svgAnimate}
              initial="hidden"
              animate="visible"
            />

            <polygon
              points="240.3,372.1 218.6,477.8 254.5,477.8 294.9,387.6 297.6,358.1 240.3,312.9"
              variants={svgAnimate}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M230.6,223.4l4.3-70.3l-63.2,52.6l-19.9,65.9h-11.4c-3.5,0-6.5,2.6-6.9,6.1l-7.2,57.7c0,0,0,0.1,0,0.1   l-0.1,0.7H79.8c-8.8,0-16.2,6.7-17.1,15.4l-9.9,95.1c-1.1,10.2,6.9,19,17.1,19H82C82,445,99,428,119.8,428c1.3,0,2.7,0.1,3.9,0.2   c2.4,0.2,4.7,0.7,6.9,1.4l9.6-92.5l6.4-51.5h39.5c3.9,0,7-3.1,7-7c0-3-1.8-5.5-4.4-6.5L206,228L230.6,223.4z"
              variants={pathAnimate}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M122.3,442.1c-0.8-0.1-1.6-0.1-2.5-0.1c-13.2,0-23.9,10.7-23.9,23.9s10.7,23.9,23.9,23.9s23.9-10.7,23.9-23.9   C143.7,453.5,134.3,443.4,122.3,442.1z"
              variants={pathAnimate}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        </motion.h1>
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
