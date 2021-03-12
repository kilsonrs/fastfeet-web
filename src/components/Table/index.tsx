import React from 'react';
import { Container } from './styles';

interface TableProps {
  columns?: string[];
}

const Table: React.FC<TableProps> = ({ columns, children }) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map(column => (
                <td key={column}>
                  <strong>{column}</strong>
                </td>
              ))}
            <td>
              <strong>Ações</strong>
            </td>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </Container>
  );
};

export default Table;
