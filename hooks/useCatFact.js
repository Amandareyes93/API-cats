import { useState, useEffect } from 'react';
import { getFactService } from '../services';
import { URL_API_RANDOM_FACT } from '../constants/constants';

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getFactService(URL_API_RANDOM_FACT).then((randomFact) => {
      setFact(randomFact);
    });
  };
  useEffect(refreshFact, []);
  return { fact, refreshFact };
};
