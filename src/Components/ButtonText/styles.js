import styled from "styled-components";

export const Container = styled.button`

  display: flex;
  gap:5px;
  background: none;
  border: none;
  
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-align: center;

  /* margin-top: 42px; */

  color: ${({ theme }) => theme.COLORS.PINK};

`;