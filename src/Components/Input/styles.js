import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  
  border-radius: 10px;
  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.COLORS.INPUT_FIELD};
  color: ${({ theme }) => theme.COLORS.PLACEHOLDER_ICONS_COLOR}; 

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_ICONS_COLOR}; 
    }
  }

  > svg {
    margin-right: 16px;
    margin-left: 16px;
  }

`;