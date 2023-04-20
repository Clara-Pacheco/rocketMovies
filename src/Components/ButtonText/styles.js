import styled from "styled-components";

import { Link } from 'react-router-dom'

export const Container = styled(Link)`

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