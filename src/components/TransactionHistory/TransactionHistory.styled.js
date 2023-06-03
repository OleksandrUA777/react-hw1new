import styled from 'styled-components';
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
`;
export const Th = styled.th`
  background-color: lightblue;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;
export const Tr = styled.tr`
  border: 1px solid #ddd;
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;
export const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;

  :first-child {
    font-weight: bold;
  }
  :nth-child(2) {
    text-align: right;
  }
  :nth-child(3) {
    text-align: center;
  }
`;
