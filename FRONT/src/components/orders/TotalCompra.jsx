
import styled from "styled-components";

const TotalCompra = () => {
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
            <TableCell>$1000</TableCell>
            <TableCell>1</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Medias</TableCell>
            <TableCell>$500</TableCell>
            <TableCell>0</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Shorts</TableCell>
            <TableCell>$500</TableCell>
            <TableCell>0</TableCell>
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
