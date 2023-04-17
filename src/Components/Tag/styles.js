import styled from "styled-components";

export const Container = styled.div`

  width: 121px;
  height: 30px;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 8px; 

  background-color: ${({ theme }) => theme.COLORS.BUTTON_TEXT};
  color: ${({ theme }) => theme.COLORS.TAG_TEXT};
  border: none;
  border-radius: 8px;

  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;