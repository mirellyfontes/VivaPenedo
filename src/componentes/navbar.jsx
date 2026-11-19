import { Link, useNavigate } from 'react-router-dom';

const NAV = [
  { nome: 'Passeios',    id: 'passeios' },
  { nome: 'Gastronomia', id: 'gastronomia' },
  { nome: 'Agenda',      id: 'agenda' },
];

export default function Navbar({ open, onToggle }) {
  const navigate = useNavigate();

  const irPara = (e, id) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
          {NAV.map(l => <a key={l.id} href={`#${l.id}`} className="nav-link" onClick={(e) => irPara(e, l.id)}>{l.nome}</a>)}
          <a href="#publicar" className="btn-orange" style={{marginLeft:10, textDecoration:'none'}} onClick={(e) => irPara(e, 'publicar')}>Publicar Evento</a>
        </div>

        <button className={`burger${open ? ' open' : ''}`} onClick={onToggle} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV.map(l => <a key={l.id} href={`#${l.id}`} onClick={(e) => irPara(e, l.id)}>{l.nome}</a>)}
        <a href="#publicar" className="btn-orange" style={{textAlign:'center', color:'#fff', borderBottom:'none'}} onClick={(e) => irPara(e, 'publicar')}>Publicar Evento</a>
      </div>
    </header>
  )
}
