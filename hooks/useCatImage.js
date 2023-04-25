import { useState, useEffect } from 'react';
import { getImageService } from '../services';
import { URL_IMAGE_CAT_SAYING, URL_BASE } from '../constants/constants';

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;
    let threeWords = fact.split(' ', 3).join(' ');
    getImageService(URL_IMAGE_CAT_SAYING, threeWords).then((url) => {
      setImageUrl(url);
    });
  }, [fact]);

  return { image: `${URL_BASE}${imageUrl}` };
};
