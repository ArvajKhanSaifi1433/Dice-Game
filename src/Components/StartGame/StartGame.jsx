import React from "react";
import styled from "styled-components";
import dices from "../Assets/dices.png";
function StartGame({ toggleGamePlay }) {
  return (
    <>
      <Container>
        <div>
          <img src={dices} alt="" />
        </div>
        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggleGamePlay}>Play Now</Button>
        </div>
      </Container>
    </>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin-inline: auto;
  display: flex;
  align-items: center;
  padding-inline: 2.5rem;
  img {
    width: 90%;
    object-fit: cover;
  }
  .content h1 {
    font-size: 3rem;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    img {
      width: 90%;
      object-fit: cover;
    }
    .content {
      align-self: flex-start;
    }
    .content h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 350px) {
    padding-inline: 0.5rem;
    .content h1 {
      font-size: 1.5rem;
    }
  }
`;

const Button = styled.button`
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

  &:hover {
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
