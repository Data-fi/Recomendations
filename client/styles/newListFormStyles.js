import styled from 'styled-components';

export const StyledListForm = styled.div`
  display: ${(props) => (props.showForm ? 'inline-flex' : 'none')}
  flex-direction: column;
  justify-content: flex-start;
  width 100%;
  color: rgb(72, 72, 72);
  margin-bottom: -5px;
`;
StyledListForm.displayName = 'StyledListForm';

export const ListInput = styled.input`
  box-sizing: border-box;
  width: 487px;
  height: 46px;
  padding 11px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  font-family: inherit;
  font-size: 1em;
  color: rgb(72,72,72);
  margin: 10px 0px 18px 0px;
  :focus {
    border: 1px solid rgb(0, 132, 137);
    outline: 0;
  }
`;
ListInput.displayName = 'ListInput';

export const StyledListFormButton = styled.button`
  box-sizing: border-box;
  width: 101px;
  height: 48px;
  font-family: inherit;
  font-size: 1em;
  border-radius: 4px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => (props.createButton ? '0' : '2')}px solid rgb(0, 132, 137);
  font-weight: 600;
  margin-left: 10px;
  :hover {
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  }
  :focus {
    outline: 0;
    box-shadow: rgba(255, 255, 255, 1) 0px 0px 0px 4px, rgba(0, 0, 0, .7) 0px 0px 0px 5px;
    background-color: ${(props) => (props.createButton ? 'rgba(0, 117, 122, 1) ' : 'rgba(0, 132, 137, 0.1)')};
  }
  transition: box-shadow ease 0.2s
`;
StyledListFormButton.displayName = 'StyledListFormButton';

export const ListFormButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
`;
ListFormButtonWrapper.displayName = 'ListFormButtonWrapper';
