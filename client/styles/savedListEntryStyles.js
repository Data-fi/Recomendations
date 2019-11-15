import styled from 'styled-components';

export const ListEntry = styled.div`
  padding 16px 0px;
  outline-offset: 8px;
  color: rgb(72, 72, 72);
  display: inline-flex;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
  width: 100%;
`;
ListEntry.displayName = 'ListEntry';

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: rgb(0, 0, 0, 0.1);
  margin: 8px 0px;
`;
Divider.displayName = 'Divider';
