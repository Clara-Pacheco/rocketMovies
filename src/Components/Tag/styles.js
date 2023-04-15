import styled from "styled-components";

export const Container = styled.div`

  width: 121px;
  height: 24px;
  padding: 5px 16px;

  display: inline-block;
  margin-right: 8px; 

  background-color: ${({ theme }) => theme.COLORS.BUTTON_TEXT};
  color: ${({ theme }) => theme.COLORS.TAG_TEXT};
  border: none;
  border-radius: 8px;

  font-size: 12px;
  line-height: 14px;
  text-align: center;


`;