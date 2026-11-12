const NAV = ['Passeios','Gastronomia','Eventos','Contato'];

export default function Navbar({ open, onToggle }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#" className="logo">
          <div className="logo-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white"/>
            </svg>
          </div>
          <span className="logo-text">Viva<span>Penedo</span></span>
        </a>

        <div className="nav-links">
          {NAV.map(l => <a key={l} href="#" className="nav-link">{l}</a>)}
          <button className="btn-orange" style={{marginLeft:10}}>Publicar Evento</button>
        </div>

        <button className={`burger${open ? ' open' : ''}`} onClick={onToggle} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV.map(l => <a key={l} href="#" onClick={onToggle}>{l}</a>)}
        <button className="btn-orange">Publicar Evento</button>
      </div>
    </header>
  )
}