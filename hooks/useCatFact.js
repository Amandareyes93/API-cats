import { useState, useEffect } from 'react';
import { getFactService } from '../services';
import { URL_API_RANDOM_FACT } from '../constants';

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = async () => {
    const randomFact = await getFactService(URL_API_RANDOM_FACT);
    setFact(randomFact);
  };

  useEffect(() => {
    refreshFact();
  }, []);

  return { fact, refreshFact };
};
