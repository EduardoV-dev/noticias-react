import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ModeToggler from './components/ModeToggler';
import ContentNews from './components/ContentNews';
import useTheme from './hooks/useTheme';
import useInput from './hooks/useInput';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Wrapper, lightTheme, darkTheme } from './styled_components/globalStyles';

function App() {
  // States the theme for the UI
  const [theme, setTheme] = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const [news, setNews] = useState([]);
  // Hook for handling the Select values and where to save news
  const [input, setInput] = useInput({
    country: 'ar',
    category: 'general'
  }, setNews);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header
        title='Noticias React'
      />
      <Wrapper>
        <ModeToggler
          theme={theme}
          setTheme={setTheme}
        />
        <Form
          setInput={setInput}
          input={input}
        />
        <ContentNews
          theme={theme}
          news={news}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;