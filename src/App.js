import React, { useState } from 'react';
import './index.css';
import Navbar from './componentes/navbar';
import Hero from './componentes/hero';
import Passeios from './componentes/passeios';
import Gastronomia from './componentes/gastronomia';
import Footer from './componentes/footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filtro, setFiltro] = useState('');

  return (
    <div>
      <Navbar open={menuOpen} onToggle={() => setMenuOpen(v => !v)} />
      <main>
        <Hero filtro={filtro} onFiltro={setFiltro} />
        <Passeios />
        <Gastronomia />
      </main>
      <Footer />
    </div>
  );
}

export default App;
