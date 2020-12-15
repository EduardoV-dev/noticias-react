import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => theme === 'light' ? updateTheme('dark') : updateTheme('light');

  const updateTheme = value => {
    localStorage.setItem('theme', value);
    setTheme(value);
  }

  const stateTheme = () => {
    let theme = localStorage.getItem('theme');
    if (theme === null) theme = 'light';
    setTheme(theme);
  }

  useEffect(() => {
    stateTheme();
  }, []);

  return [theme, toggleTheme];
}

export default useTheme;