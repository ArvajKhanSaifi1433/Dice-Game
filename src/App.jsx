import React, { useState } from "react";
import StartGame from "./Components/StartGame/StartGame";
import GamePlay from "./Components/GamePlay/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggleGamePlay={toggleGamePlay} />
      )}
    </>
  );
}

export default App;
