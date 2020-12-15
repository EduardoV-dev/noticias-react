import styled from 'styled-components';

export const NewsContainer = styled.main`
  padding: 0 .5rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;