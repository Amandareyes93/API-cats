import { useCatFact } from '../../hooks/useCatFact';
import { useCatImage } from '../../hooks/useCatImage';

export default function Cats() {
  const { fact, refreshFact } = useCatFact();
  const { image } = useCatImage({ fact });

  const handleClick = () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Cat App</h1>
      <section>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {image && <img alt={`Cat saying the first three words ${fact}`} src={image} />}
      </section>
    </main>
  );
}
