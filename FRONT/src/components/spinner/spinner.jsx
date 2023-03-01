import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Spinner = () => {
  return (
    <>
      <SpinnerContainer>
        <ClipLoader color="white" size={130} />
      </SpinnerContainer>
    </>
  );
};

export { Spinner };
