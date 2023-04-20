import { useState } from "react";
import CustomForm from "./components/CustomForm";
import OneThing from "./components/OneThing";

import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

function getSuccessMessage() {
  const messages = [
    "Congrats!",
    "Great Job!",
    "Don't yoy feel great?",
    "Up, up, and up!",
    "Um...Okay",
    "Did you though?",
    "Forget it abot it!",
    "Give your Best",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

function App() {
  const [oneThing, setOneThing] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);

  const handleInput = (e) => {
    setOneThing(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false);
  };

  const handleCompletedThing = async (e) => {
    e.target.setAttribute("disabled", true);
    setOneThing(getSuccessMessage());
    await jsConfetti.addConfetti({
      emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸", "🦄", "ya..", "😃", "💫"],
    });
    setOneThing("");
    setIsCompleted(true);
  };

  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-300 to slate-400 dark:from-slate-800 dark:to-slate-900 dark:text-slate-100 text-black">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && (
          <CustomForm
            oneThing={oneThing}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        )}
        {!isCompleted && (
          <OneThing
            oneThing={oneThing}
            handleCompletedThing={handleCompletedThing}
          />
        )}
      </div>
    </div>
  );
}

export default App;
