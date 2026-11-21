import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import Home from './paginas/home';
import PaginaPasseios from './paginas/passeios';
import PaginaGastronomia from './paginas/gastronomia';

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
          <Route path="/passeios" element={<PaginaPasseios />} />
          <Route path="/gastronomia" element={<PaginaGastronomia />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
