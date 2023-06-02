import styled from 'styled-components';

export const Status = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';

      default:
        return 'white';
    }
  }};
`;
export const Item = styled.li`
  box-shadow: grey 2px 2px;
  border: 1px solid grey;
  width: 300px;
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 8px;
`;
