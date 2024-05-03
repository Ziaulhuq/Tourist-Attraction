import React from "react";
import { motion } from "framer-motion";

const Forms = () => {
  return (
    <motion.div
      className="bg-lime-100 p-5 flex flex-row justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <form className="flex justify-center gap-4 items-center">
        <label className="text-lime-900 font-semibold"> Name : </label>
        <input
          type="text"
          name="name"
          className="w-50 p-2 bg-lime-600 text-sm text-white rounded-sm font-serif outline-inherit border-inherit"
        />
        <label className="text-lime-900 font-semibold"> Password : </label>
        <input
          type="text"
          name="name"
          className="w-50 p-2 bg-lime-600 text-sm font-serif rounded-sm outline-inherit text-white border-inherit"
        />
        <motion.button
          className="bg-lime-800 text-white pt-2 pb-2 pr-4 pl-4 rounded-md text-sm font-semibold"
          whileHover={{ scale: 1.1 }}
        >
          SEARCH
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Forms;
