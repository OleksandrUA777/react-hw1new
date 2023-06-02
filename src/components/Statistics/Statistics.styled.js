import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 15px;
  border: 1px solid grey;
  width: max-content;

  :last-child {
    margin-bottom: 0px;
  }
`;
export const Title = styled.h2`
  font-size: 25px;
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
`;
export const Item = styled.li`
  flex-direction: column;
  display: flex;
  gap: 4px;
  padding: 10px;
  background-color: lightblue;
`;
export const Label = styled.span`
  /* font-size: 10px; */
`;
export const Percentage = styled.span`
  font-size: 19px;
  font-weight: bold;
  color: white;
`;
