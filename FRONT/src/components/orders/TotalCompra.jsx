import { useContext } from "react";
import { OrderContext } from "../../context/order/OrderContext";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 99vw;
  border: 1px solid white;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
`;

const TableFooter = styled.tfoot`
  width: 50%;
`;

const TotalCompra = () => {
  const { price } = useContext(OrderContext);
  const { total, shirts, pants, socks } = price();

  return (
    <div>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Item</TableHeader>
            <TableHeader>Precio de usuario</TableHeader>
            <TableHeader>Cantidad</TableHeader>
            <TableHeader>Total</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Camisetas</TableCell>
            <TableCell>USD 10</TableCell>
            <TableCell> {shirts} </TableCell>
            <TableCell> USD{shirts * 10} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Shorts</TableCell>
            <TableCell> USD 7 </TableCell>
            <TableCell>{pants}</TableCell>
            <TableCell> USD{pants * 7} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Medias</TableCell>
            <TableCell>USD 2</TableCell>
            <TableCell> {socks} </TableCell>
            <TableCell> USD{socks * 2} </TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan="4"> usd{total} </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TotalCompra;
