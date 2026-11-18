import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import Home from './paginas/home';
import Passeios from './componentes/passeios';
import Gastronomia from './componentes/gastronomia';
import Eventos from './componentes/eventos';
import PublicarEvento from './componentes/publicarEvento';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar open={menuOpen} onToggle={() => setMenuOpen(v => !v)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passeios" element={<Passeios />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/publicar" element={<PublicarEvento />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;