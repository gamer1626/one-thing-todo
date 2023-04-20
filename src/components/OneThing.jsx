import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const OneThing = ({ oneThing, handleCompletedThing }) => {
  return (
    <>
      <p className="text-3xl sm:text-6xl font-bold">{oneThing}</p>
      <button
        onClick={handleCompletedThing}
        autoFocus
        className="flex items-center py-3 px-6 space-x-3 rounded-md focus:outline-none bg-teal-600 dark:bg-teal-500 text-2xl ring-4 ring-teal-600 dark:ring-teal-500 ring-offset-4 ring-offset-slate-200 dark:ring-offset-slate-800 hover:opacity-80 disabled:opacity-50 transition-opacity"
      >
        <span>Mark Done</span>
        <AiFillCheckCircle size={25} />
      </button>
    </>
  );
};

export default OneThing;