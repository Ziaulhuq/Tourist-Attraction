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
      <motion.p
        className="text-center mt-3 text-xs opacity-50"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 2 }}
      >
        loremId laborum veniam amet nostrud ea officia enim nisi incididunt
        anim.
      </motion.p>
      <motion.p
        className="text-center mt-3 text-sm opacity-95"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 2 }}
      >
        lorem Consequat cillum id consectetur aliquip officia id elit aliquip
        qui enim irure anim. Non anim culpa ex amet excepteur ea. Qui pariatur
        proident ex ea commodo eiusmod aliquip incididunt non ullamco elit ipsum
        sint officia.
      </motion.p>
    </motion.div>
  );
};

export default Header;
