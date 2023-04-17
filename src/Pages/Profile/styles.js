import styled from "styled-components";

export const Container= styled.div`
  width: 100%;
  height: 100vh;

   > header {
      width: 100%;
      height: 144px;

      display: flex;
      align-items: center;
  
      padding: 0 144px;
    
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
    }

    > svg {
      font-size: 16px;
    
    }
    
  `;

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  margin: -96px auto 64px;

   > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

     input {
      display: none;
    }

  }



`;

export const Form = styled.form`
  max-width: 340px;
  height: 336px;
  margin: -55px auto 32px;

`;

