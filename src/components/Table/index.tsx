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
                <th key={column}>
                  <strong>{column}</strong>
                </th>
              ))}
            <th>
              <strong>Ações</strong>
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </Container>
  );
};

export default Table;
