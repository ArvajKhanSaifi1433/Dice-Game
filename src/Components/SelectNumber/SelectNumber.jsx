import React from "react";
import styled from "styled-components";

function SelectNumber({ selectedNumber, setError, error, setSelectedNumber }) {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {error !== false && (
        <p
          style={{
            alignSelf: "end",
            fontWeight: "700",
            letterSpacing: "1px",
            color: "red",
          }}
        >
          Please Select Any Number
        </p>
      )}

      <SelectNumberContainer>
        {arrNumber.map((value) => {
          return (
            <Box
              isSelected={value === selectedNumber}
              key={crypto.randomUUID()}
              onClick={(e) => {
                setSelectedNumber(value);
                setError(false);
              }}
            >
              {value}
            </Box>
          );
        })}
      </SelectNumberContainer>
      <p style={{ alignSelf: "end", fontWeight: "700", letterSpacing: "1px" }}>
        Select Number
      </p>
    </div>
  );
}

const SelectNumberContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: nowrap;
  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const Box = styled.button`
  padding: 8px 14px;
  border: 1px solid black;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  letter-spacing: 1px;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? "black" : "white")};
`;

export default SelectNumber;
