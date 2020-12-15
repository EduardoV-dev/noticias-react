import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.bgBody};
    font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
  }
`;

export const Wrapper = styled.main`
  width: 95%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1200px;
    padding: 0 1em;
  }
`;

export const lightTheme = {
  bgBody: '#fff',
  bgBodyDarken: '#f2f2f2',
  primary: '#82AEB1',
  accent: '#7153D1',
  text: '#000'
}

export const darkTheme = {
  bgBody: '#202020',
  bgBodyDarken: '#2E2E2E',
  primary: '#575EB0',
  accent: '#575EB0',
  text: '#fff'
}