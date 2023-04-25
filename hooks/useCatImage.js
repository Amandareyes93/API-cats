import { useState, useEffect } from 'react';
import { getImageService } from '../services';
import { URL_IMAGE_CAT_SAYING, URL_BASE } from '../constants';

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState();

  const callService = async (fact) => {
    let threeWords = fact.split(' ', 3).join(' ');
    const url = await getImageService(URL_IMAGE_CAT_SAYING, threeWords);
    setImageUrl(url);
  };

  useEffect(() => {
    if (!fact) return;
    callService(fact);
  }, [fact]);

  return { image: `${URL_BASE}${imageUrl}` };
};
