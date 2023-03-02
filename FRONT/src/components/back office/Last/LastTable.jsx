import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid white;
  border-collapse: collapse;
  text-align: center;
  margin: 1rem 0;
  color: white;

  tr th,
  td {
    padding: 0.6rem;
    border: 1px solid white;
    border-collapse: collapse;
  }
`;

const LastTable = ({ name, lastItemId, lastItemInfo }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{lastItemId}</td>
            <td>{lastItemInfo}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export { LastTable };
