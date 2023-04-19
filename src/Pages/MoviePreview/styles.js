import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 100vh;

`;

export const MovieInfo = styled.div`
   max-width: 1137px;
   height: 581px; 

   margin-top: 53px;
   margin-left: 193px;
 
  > p {
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: justify;

    color: ${({ theme }) => theme.COLORS.PARAGRAPH_MOVIEINFO};

  }

`;

export const PublisherInfo = styled.div`
  width: 100%;
  height: 135px;

  margin-top: 53px;

  > a {
      
      display: flex;
      align-items: center;

      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: center;

      color: ${({ theme }) => theme.COLORS.PINK};

      svg {
        font-size: 16px;
        margin-right: 8px;
      }
    }

  > div {
    display: flex;
    align-items: center;

    margin: 24px 0;

    > h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;

      margin-right: 19px;
      
      color: ${({ theme }) => theme.COLORS.H2};
      
    }

    > svg {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 10px;
    }
  }

  > div {

    > img {
      width: 16px;
      left: 16px;
      border-radius: 50%;

      margin-right: 8px;
    }

    > span {
      
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: ${({ theme }) => theme.COLORS.PARAGRAPH_MOVIEINFO};

        margin-right: 8px;
      
    }
  }

`;

export const TagGroup = styled.div`
 
  display: flex;
  margin-top: 60px;
  gap: 12px;
 
  width: 276px;
  height: 30px;

  margin-bottom: 40px;

`; 