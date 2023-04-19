import styled from "styled-components";

export const Container = styled.div`

  width: auto;
  height: 56px;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BUTTON_TEXT };
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.PLACEHOLDER_ICONS_COLOR}`: "none"};
  color: ${({ theme }) => theme.COLORS.TAG_TEXT};
  border-radius: 8px;

  font-size: 12px;
  line-height: 14px;
  text-align: center;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;