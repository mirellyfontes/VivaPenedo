
const FILTROS = ['Tudo','Aberto Agora','Passeios','Gastronomia','Eventos'];

export default function Hero({ filtro, onFiltro }) {
  return (
    <section className="hero">
      <div className="hero-img-wrap">
        <img className="hero-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4_sNECfhWMK4-BygMwwCBPoCe0s-nd1ofzS4sANvsg&s=10"
          alt="Imagem da Cidade de Penedo, Alagoas, as margens do Rio São Francisco"
        />
        <div className="hero-overlay-r"/>
        <div className="hero-overlay-b"/>
        <div className="hero-content">
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-label">Penedo · Alagoas · Rio São Francisco</span>
              <h1 className="hero-title">Descubra o<br/>Velho Chico</h1>
              <p className="hero-sub">Eventos, gastronomia e passeios fluviais na cidade mais histórica às margens do São Francisco.</p>
              <div className="hero-btns">
                <button className="btn-orange-lg">Explorar agora →</button>
                <a className="btn-ghost" href="#passeios">Ver passeios</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="filtros-bar">
        <div className="filtros-inner">
          {FILTROS.map(f => {
            const on = filtro === f || (f === 'Tudo' && !filtro)
            return (
              <button key={f} className={`filtro-btn${on ? ' active' : ''}`}
                onClick={() => onFiltro(f === 'Tudo' ? '' : f)}
              >{f}</button>
            )
          })}
        </div>
      </div>
    </section>
  )
}