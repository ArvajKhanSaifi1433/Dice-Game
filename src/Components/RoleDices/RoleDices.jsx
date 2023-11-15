import React, { useCallback, useState } from "react";
import dice_1 from "../Assets/dice_1.png";
import dice_2 from "../Assets/dice_2.png";
import dice_3 from "../Assets/dice_3.png";
import dice_4 from "../Assets/dice_4.png";
import dice_5 from "../Assets/dice_5.png";
import dice_6 from "../Assets/dice_6.png";
import styled from "styled-components";

function RoleDices({
  currentDice,
  selectedNumber,
  setCountScore,
  setCurrentDice,
  setSelectedNumber,
  setError,
}) {
  const dicObj = {
    1: dice_1,
    2: dice_2,
    3: dice_3,
    4: dice_4,
    5: dice_5,
    6: dice_6,
  };

  const fun = useCallback(() => {
    let min = 1;
    let max = 7;
    let gn = Math.floor(Math.random() * (max - min) + min);
    return gn;
  }, []);

  const khan = () => {
    let yy = fun();

    if (selectedNumber === 0) {
      setError(true);
      return;
    }
    setCurrentDice(yy);
    if (selectedNumber === yy) {
      setCountScore((prev) => prev + 1);
    } else {
      setCountScore((prev) => prev - 1);
    }
    setSelectedNumber(0);
  };

  return (
    <RoleD>
      <div>
        <img src={`${dicObj[currentDice]}`} alt="dice_1" />
      </div>
      <Button1 onClick={khan}>Click on Dice to roll</Button1>
      <Button2 onClick={() => setCountScore(0)}>Reset Score</Button2>
    </RoleD>
  );
}

export default RoleDices;

const RoleD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-block: 2rem;
  gap: 1rem;
  img {
    width: 95%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button1 = styled.button`
  max-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  border: none;
  font-size: 1rem;
  cursor: pointer;

  &:active {
    transition: 0.4s;
    background: white;
    border: 1px solid black;
    color: black;
  }
  @media (max-width: 350px) {
    font-size: 0.9rem;
    font-weight: 500;
    padding: 6px 12px;
  }
`;
const Button2 = styled.button`
  max-width: 200px;
  padding: 10px 18px;
  border-radius: 5px;
  background: white;
  color: black;
  font-weight: 700;
  letter-spacing: 1px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid black;

  &:active {
    transition: 0.4s;
    background: black;
    color: white;
  }
  @media (max-width: 350px) {
    font-size: 0.9rem;
    font-weight: 500;
    padding: 6px 12px;
  }
`;
