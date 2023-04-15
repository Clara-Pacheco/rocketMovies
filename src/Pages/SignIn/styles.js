import styled from "styled-components";

import backgroundImg from '../../assets/signInUp_img.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`;

export const Form = styled.form`

  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
  > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    margin-bottom: 48px;

    color: ${({ theme }) => theme.COLORS.PARAGRAPH_SIGNINUP};
  }

  > h2 {
    
    margin-left: -164px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    margin-bottom: 48px;
 
   color: ${({ theme }) => theme.COLORS.PARAGRAPH_MOVIEINFO};
  }

`;

export const Background = styled.div`
  flex:1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;


`;