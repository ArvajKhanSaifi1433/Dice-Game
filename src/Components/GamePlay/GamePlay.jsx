import React, { useState } from "react";
import TotalScore from "../TotalScore/TotalScore";
import SelectNumber from "../SelectNumber/SelectNumber";
import styled from "styled-components";
import RoleDices from "../RoleDices/RoleDices";
import { useLocalStorage } from "../../Hook/useLocalStorage";

function GamePlay() {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [countScore, setCountScore] = useLocalStorage("countScore", 0);
  const [error, setError] = useState(false);

  return (
    <Main>
      <Top>
        <TotalScore countScore={countScore} />
        <SelectNumber
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </Top>
      <RoleDices
        currentDice={currentDice}
        setSelectedNumber={setSelectedNumber}
        selectedNumber={selectedNumber}
        setCountScore={setCountScore}
        setCurrentDice={setCurrentDice}
        error={error}
        setError={setError}
      />
    </Main>
  );
}

const Main = styled.main`
  max-width: 1180px;
  margin-inline: auto;
  padding: 0 1rem;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export default GamePlay;
