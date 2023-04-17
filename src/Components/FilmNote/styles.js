import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: ${({ theme }) => theme.COLORS.PARAGRAPH_MYMOVIES};

  > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    margin-bottom: 8px;

    color: ${({ theme }) => theme.COLORS.H2};
  }

  > div {
    svg {
      font-size: 12px;
      height: 11px;

      margin-right: 6px;
      margin-bottom: 15px;

      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
      
`;