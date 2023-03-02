import React, { useContext } from "react";
import {
  BackOrders,
  BackProducts,
  BackUsers,
  Last,
  Spinner,
  Total,
} from "../../components/export";
import { BackOfficeContext } from "../../context/back office/BackOfficeContext";

const BackOfficePage = () => {
  const { isLoading } = useContext(BackOfficeContext);
  return (
    <>
      {isLoading ? (
        <Spinner />
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

export default BackOfficePage;
