import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CustomForm = ({ oneThing, handleInput, handleSubmit }) => {
  return (
    <>
      <div className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-300 to slate-400 dark:from-slate-800 dark:to-slate-900 dark:text-slate-100 text-black">
        <div className="grid place-items-center gap-8 m-8">
          <h1 className="text-3xl font-bold text-center sm:text-6xl ">
            What is your "One Thing"?
          </h1>
          <form
            onSubmit={handleSubmit}
            sd
            className="flex ring-4 dark:ring-slate-900 ring-slate-100 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200  rounded-md"
          >
            <input
              value={oneThing}
              onChange={handleInput}
              type="text"
              autoFocus
              maxLength={64}
              placeholder="Your one thing.."
              className="bg-inherit rounded-md py-2 px-6 focus:outline-none text-xl sm:text-2xl text-slate-900 appearance-none caret-teal-600 w-full placeholder:text-slate-400"
            />
            <button className="mr-2 focus:outline-none text-slate-900 bg-inherit rounded-md hover:text-teal-600">
              <BsFillArrowRightCircleFill size={30} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CustomForm;
