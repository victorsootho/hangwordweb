import React, { useEffect, useState } from "react";
import useWord from "../hooks/useWord";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Hangword = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWord(solution);
  console.log(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (turn > 5) {
      setTimeout(() => 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
};

export default Hangword;
