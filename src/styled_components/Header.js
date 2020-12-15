import styled from 'styled-components';

export const HeaderContainer = styled.header`
  min-height: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`;

export const Title = styled.h1`
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  font-size: 1.875rem;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;