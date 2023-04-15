import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 32px;
  margin: 0 132px;
  gap: 15px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MYMOVIESCARDS};

 
`;