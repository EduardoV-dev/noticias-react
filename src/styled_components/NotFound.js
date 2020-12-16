import styled from 'styled-components';

export const Container = styled.section`
  width: 80%;
  margin: 1em auto;
`;

export const Headline = styled.h2`
  color: ${({ theme }) => theme.text};
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  text-align: center; 
`;

export const ImageContainer = styled.figure`
  width: 80%;
  margin: 2em auto;

  img {
    max-width: 100%;
    object-fit: cover;
  }
`;