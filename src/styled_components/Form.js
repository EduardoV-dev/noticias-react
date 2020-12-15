import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: ${({theme}) => theme.bgBodyDarken};
  padding: 1rem;
  border-radius: 10px;
  margin: 2rem 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
    padding: 2rem;
  }
`;