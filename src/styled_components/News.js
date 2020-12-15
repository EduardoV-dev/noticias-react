import styled, { css } from 'styled-components';

export const Card = styled.article`
  width: 95%;
  margin: 0 auto 3rem auto;
  background-color: ${({ theme }) => theme.bgBodyDarken};
  border-radius: 1.25rem;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 22rem;
    margin: 0 0 1rem 0;
  }
`;

export const ImgContainer = styled.figure`
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
    width: 100%;
    height: 98%;
    z-index: 1;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CardSource = styled.p`
  position: absolute;
  bottom: 8%;
  left: 5%;
  color: #fff;
  font-weight: bold;
  z-index: 1;
`;

export const CardContent = styled.div`
  padding: 1em;
`;

export const Title = styled.h2`
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

export const Author = styled(Description)`
  text-align: right;
  color: ${({ theme }) => theme.text};
  opacity: .6;
  font-size: 0.875rem;
`;

export const Button = styled.a`
  display: block;
  background-color: ${({ theme }) => theme.accent};
  color: #fff;
  padding: .5rem 1.5rem;
  width: 100%;
  text-align: center;
  border-radius: 0.625rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(90%);
  }

  ${({ dark }) => dark && css`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({theme}) => theme.accent};
      color: ${({theme}) => theme.text};
    }
  `};
`;