import React from 'react';
import News from './News';
import NotFound from './NotFound';
import { NewsContainer } from '../styled_components/ContentNews';

const ContentNews = ({ theme, news }) => {
  const condition = news.length === 0;
  const component = condition ? <NotFound /> : (
    news.map(newNews => (
      <News
        key={newNews.url}
        theme={theme}
        newNews={newNews}
      />
    )));

    console.log(condition, component);

  return (
    <NewsContainer>
      {component}
    </NewsContainer>
  );
}

export default ContentNews;