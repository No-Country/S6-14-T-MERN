import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid white;
  border-collapse: collapse;
`;

const LastTable = ({ name }) => {
  return (
    <>
      <Table>
        <tr>
          <th>ID</th>
          <th>{name}</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </Table>
    </>
  );
};

export { LastTable };
