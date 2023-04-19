import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  border-radius: 10px;
  border: none;
  resize: none;

  background-color: ${({ theme }) => theme.COLORS.INPUT_FIELD};
  color: ${({ theme }) => theme.COLORS.PLACEHOLDER_ICONS_COLOR};

  padding: 19px 16px;
  /* margin-bottom: 40px; */

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER_ICONS_COLOR};
  }

`;