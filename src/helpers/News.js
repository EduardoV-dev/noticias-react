import defaultImageHeading from '../assets/news placeholder.jpg';

export const setImage = img => {
  if (img === '(none)' || img === '' || img === null) return defaultImageHeading;
  return img;
}

export const setAuthor = author => {
  if (author === '' || author === null) return 'anónimo';
  return author;
}