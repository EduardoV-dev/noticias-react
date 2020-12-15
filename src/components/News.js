import React from 'react';
import { Card, CardImg, ImgContainer, CardSource, CardContent, Title, Description, Author, Button } from '../styled_components/News';
import { setImage, setAuthor } from '../helpers/News';

const News = ({ theme, newNews }) => {
  const { author, title, description, source: { name }, url, urlToImage } = newNews;
  const img = setImage(urlToImage);
  const authorName = setAuthor(author);

  return (
    <Card>
      <ImgContainer>
        <CardImg
          src={img}
          alt='News'
        />
        <CardSource>Fuente: {name}</CardSource>
      </ImgContainer>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Author>-Autor: {authorName}</Author>
        {theme === 'light'
          ? <Button type="button" href={url} target='_blank'>Leer noticia</Button>
          : <Button dark type="button" href={url} target='_blank'>Leer noticia</Button>
        }
      </CardContent>
    </Card>
  );
}

export default News;