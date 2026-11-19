import { useState } from 'react';
import Hero from '../componentes/hero';
import Passeios from '../componentes/passeios';
import Gastronomia from '../componentes/gastronomia';
import Eventos from '../componentes/eventos';
import PublicarEvento from '../componentes/publicarEvento';

export default function Home() {
  const [atualizar, setAtualizar] = useState(0);

  return (
    <>
      <Hero />
      <Passeios />
      <Gastronomia />
      <Eventos atualizar={atualizar} />
      <PublicarEvento onPublicado={() => setAtualizar(atualizar + 1)} />
    </>
  );
}
