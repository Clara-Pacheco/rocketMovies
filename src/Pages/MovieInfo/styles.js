import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;


  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 50px 123px;

    > h1 {
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;

    }

    > button {
      
      width: 207px;
      height: 48px;
      border-radius: 8px;
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;


      background-color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.MOVIEINFO_BUTTON_TEXT};

      svg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
    }

  }

`;