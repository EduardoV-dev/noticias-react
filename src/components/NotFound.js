import React from 'react';
import { Container, Headline, ImageContainer } from '../styled_components/NotFound';
import notFound from '../assets/news not found.svg';

const NotFound = () => {
  return (
    <Container>
      <Headline>No hay noticias por el momento</Headline>
      <ImageContainer>
        <img
          src={notFound}
          alt='Noticias no encontradas'
        />
      </ImageContainer>
    </Container>
  );
}

export default NotFound;