import { useState, useEffect } from 'react';
import { URL_BASE, URL_API_RANDOM_FACT, URL_IMAGE_CAT_SAYING } from '../../constants/constants';

export default function Cats() {
  const [fact, setFact] = useState();
  const [image, setImage] = useState();

  let threeWords;

  useEffect(() => {
    const fetchFact = async () => {
      const response = await fetch(URL_API_RANDOM_FACT);
      const { fact } = await response.json();
      setFact(fact);
    };

    fetchFact();
  }, []);

  useEffect(() => {
    if (!fact) return;

    threeWords = fact.split(' ', 3).join(' ');

    const fetchImage = async () => {
      const response = await fetch(`${URL_IMAGE_CAT_SAYING}${threeWords}?size=50&color=red&json=true`);
      const { url } = await response.json();
      setImage(url);
    };
    fetchImage();
  }, [fact]);

  return (
    <main>
      <h1>Cat App</h1>
      <section>
        {fact && <p>{fact}</p>}
        {image && <img alt={`Cat saying ${threeWords}`} src={`${URL_BASE}${image}`} />}
      </section>
    </main>
  );
}
