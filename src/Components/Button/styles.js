import styled from "styled-components";

export const Container = styled.button`
  width: 100%; 
  height: 56px;

  border: 0;
  border-radius: 10px;
  margin-top: 24px;

  background-color: ${({ theme, toSave }) => toSave ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_MYMOVIES_MARKERS};
  color: ${({ theme, toSave }) => toSave ? theme.COLORS.BACKGROUND_TAG : theme.COLORS.PINK};

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;


`;