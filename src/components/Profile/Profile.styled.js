import styled from 'styled-components';

export const Image = styled.img`
  width: 100px;
`;
export const Wrapper = styled.div`
  height: 350px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid black;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
`;
export const Stats = styled.ul`
  list-style: none;
  display: flex;
`;
export const Label = styled.span`
  font-size: 14px;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
