import { useEffect, useState } from 'react';
import axios from 'axios';

const useInput = (initialValue, setNews) => {
  const [input, setInput] = useState(initialValue);

  const handleInput = e => setInput({ ...input, [e.target.name]: e.target.value });

  const {country, category} = input;

  const handleNewsInfo = async () => {
    const apiKey = '5396d29b5a8d486096fc78855596f680';
    const URL = 'https://newsapi.org/v2/top-headlines';
    const News = await axios.get(URL, {
      params: {
        apiKey,
        category,
        country
      }
    });
    setNews(News.data.articles);
  }

  useEffect(() => {
    handleNewsInfo();
    // eslint-disable-next-line
  }, [input]);

  return [input, handleInput];
}

export const CountriesList = [
  { code: 'ar', name: 'Argentina' },
  { code: 'co', name: 'Colombia' },
  { code: 'cu', name: 'Cuba' },
  { code: 'us', name: 'Estados Unidos de América' },
  { code: 'mx', name: 'Mexico' },
  { code: 've', name: 'Venezuela' }
];

export const CategoriesList = [
  { code: 'general', name: 'General' },
  { code: 'business', name: 'Negocios' },
  { code: 'entertaiment', name: 'Entretenimiento' },
  { code: 'health', name: 'Salud' },
  { code: 'science', name: 'Ciencia' },
  { code: 'sports', name: 'Deportes' },
  { code: 'technology', name: 'Tecnología' }
];

export default useInput;