
import styled from "styled-components";

const TotalCompra = () => {
  const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
  `;

  const TableRow = styled.tr`
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
  `;

  const TableCell = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
  `;

  const TableHeader = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  `;

  const TableFooter = styled.tfoot`
    width: 100%;
  `;

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
            <TableCell>Medias</TableCell>
            <TableCell>Shorts</TableCell>
            <TableCell>Camisetas</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan="4">Precio total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TotalCompra;
