import React, { useContext } from "react";
import {
  BackOrders,
  BackProducts,
  BackUsers,
  Last,
  Total,
} from "../../components/export";
import { BackOfficeContext } from "../../context/back office/BackOfficeContext";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const BackOfficePage = () => {
  const { isLoading } = useContext(BackOfficeContext);
  return (
    <>
      {isLoading ? (
        <SpinnerContainer>
          <ClipLoader color="white" size={130} />
        </SpinnerContainer>
      ) : (
        <main>
          <Total />
          <Last />
          <BackProducts />
          <BackUsers />
          <BackOrders />  
        </main>
      )}
    </>
  );
};

export { BackOfficePage };
