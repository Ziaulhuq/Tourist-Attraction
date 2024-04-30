import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.div>
      <motion.h1
        className="text-5xl font-bold bg-gradient-to-r from-lime-900 via-green-500 to-lime-100  text-transparent bg-clip-text drop-shadow-md flex content-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        Tourist Attraction
      </motion.h1>
      <p className="text-center mt-3 text-xs opacity-50">
        loremId laborum veniam amet nostrud ea officia enim nisi incididunt
        anim.
      </p>
      <p className="text-center mt-3 text-sm opacity-95">
        lorem Consequat cillum id consectetur aliquip officia id elit aliquip
        qui enim irure anim. Non anim culpa ex amet excepteur ea. Qui pariatur
        proident ex ea commodo eiusmod aliquip incididunt non ullamco elit ipsum
        sint officia.
      </p>
    </motion.div>
  );
};

export default Header;
