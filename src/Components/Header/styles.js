import styled from "styled-components";

import { Link } from "react-router-dom"

export const Container = styled.div`
  grid-area: header;
  
  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 123px;
  gap: 64px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

  > h1 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
  `;

export const Input = styled.input`

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 19px 24px;
    border: none;

    width: 630px;
    height: 56px;

    background-color: ${({ theme }) => theme.COLORS.INPUT_FIELD};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 10px;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_ICONS_COLOR};
    }
  `;

  export const Profile = styled(Link)`

      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 132px;
      margin-top: 24px;
      

      width: 198px;
      height: 98px;
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.PARAGRAPH_MOVIEINFO};

      > div {
          display: flex;
          flex-direction: column;
          margin-right: 9px;

          > strong { 
          font-weight: 700;   
        }

          > span {
          font-weight: 400; 
          color: ${({ theme }) => theme.COLORS.PLACEHOLDER_ICONS_COLOR};
        }
      }

      > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
     

        border: 1px solid ${({ theme }) => theme.COLORS.IMG_BORDER};


      }
  `;









