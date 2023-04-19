import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow-y: auto;


`;

export const InternalContainer = styled.div`
  width: 1137px;
  height: 783px;
  margin: 40px auto;
 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 24px 16px 0px;
  gap: 40px;

  > header {
    > h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;

      margin-top: 24px;
      margin-bottom: 40px;

      color: ${({ theme }) => theme.COLORS.PARAGRAPH_MOVIEINFO};
    }
  }

`;

export const InputField = styled.div` 
      width: 1113px;
      height: 55px;

      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 40px;

`;

export const Section = styled.section`
  > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    color: ${({ theme }) => theme.COLORS.PARAGRAPH_MYMOVIES};

    margin-bottom: 24px;

  }
`;

export const TagsContainer = styled.div`

      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 16px;
      gap: 24px;

      width: 1113px;
      height: 88px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MYMOVIES_MARKERS};
      border-radius: 8px;

`;


export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  width: 1113px;
  height: 48px;


`;