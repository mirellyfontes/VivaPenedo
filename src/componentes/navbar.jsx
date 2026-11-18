import { Link, NavLink, useNavigate } from 'react-router-dom';

const NAV = [
  { nome: 'Passeios',    rota: '/passeios' },
  { nome: 'Gastronomia', rota: '/gastronomia' },
  { nome: 'Eventos',     rota: '/eventos' },
];

export default function Navbar({ open, onToggle }) {
  const navigate = useNavigate();

  const handleClickPublicar = () => {
    navigate('/eventos/publicar');
    if (open) onToggle();
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white"/>
            </svg>
          </div>
          <span className="logo-text">Viva<span>Penedo</span></span>
        </Link>

        <div className="nav-links">
          {NAV.map(l => <NavLink key={l.rota} to={l.rota} end className="nav-link">{l.nome}</NavLink>)}
          <button className="btn-orange" style={{marginLeft:10}} onClick={handleClickPublicar}>Publicar Evento</button>
        </div>

        <button className={`burger${open ? ' open' : ''}`} onClick={onToggle} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV.map(l => <NavLink key={l.rota} to={l.rota} end onClick={onToggle}>{l.nome}</NavLink>)}
        <button className="btn-orange" onClick={handleClickPublicar}>Publicar Evento</button>
      </div>
    </header>
  )
}