import React from "react";
import styled from "styled-components";

function TotalScore({ countScore }) {
  return (
    <ScoreContainer>
      <h1>{countScore}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default TotalScore;

const ScoreContainer = styled.div`
  display: inline-flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 3rem;
  }
  p {
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
