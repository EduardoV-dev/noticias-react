import React from 'react';
import News from './News';
import { NewsContainer } from '../styled_components/ContentNews';

const ContentNews = ({ theme, news }) => {
  console.log(news);
  if (news === []) return null; 

  return (
    <NewsContainer>
      {news.map(newNews => (
        <News 
          key={newNews.url}
          theme={theme}
          newNews={newNews}
        />
      ))}
    </NewsContainer>
  );
}

export default ContentNews;