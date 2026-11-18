import { useState } from 'react';
import Hero from '../componentes/hero';
import Passeios from '../componentes/passeios';
import Gastronomia from '../componentes/gastronomia';
import Eventos from '../componentes/eventos';

export default function Home() {
  const [filtro, setFiltro] = useState('');

  return (
    <>
      <Hero filtro={filtro} onFiltro={setFiltro} />
      <Passeios />
      <Gastronomia />
      <Eventos />
    </>
  );
}