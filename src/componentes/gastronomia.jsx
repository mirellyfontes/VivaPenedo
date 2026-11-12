const RESTAURANTES = [
  { id:1, nome:'Maurício de Nassau',         esp:'Almoço, jantar e petiscos', nota:'4.9', aberto:true,  img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/57/c4/e1/tardezinha-na-nassau.jpg?w=600&h=-1&s=1' },
  { id:2, nome:'Forte da Rocheira',   esp:'Almoço',    nota:'4.7', aberto:true,  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBm_FrVhVfeEq-PYglsUS7ULet-lop_XPpgBy_ua0nNg&s=10' },
  { id:3, nome:'Paraíso Velho Chico',      esp:'Almoço & Petiscos', nota:'4.5', aberto:false, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTri2OugA3gFaBCMwXC-aJuXnOPpPPO4voDHdaLsjTifAq6HoRDPXF4o9Q&s=10' },
  { id:4, nome:'Vila Dão Pêdu', esp:'Petiscos & Bebidas',    nota:'4.8', aberto:true,  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmg0YGEN4tjhcjaOrjSFB9QjlVyTuPoTwaWb7jyXCsTQ&s=10' },
]

export default function Gastronomia() {
  return (
    <section className="section section-alt">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="section-label">Gastronomia</p>
            <h2 className="section-title">Onde comer em Penedo</h2>
          </div>
          <a href="#" className="section-link">Ver todos →</a>
        </div>
        <div className="rest-grid">
          {RESTAURANTES.map(r => (
            <article key={r.id} className="card-rest">
              <div className="rest-img-wrap">
                <img className="rest-img" src={r.img} alt={r.nome}/>
                <div className="rest-badge" style={{background: r.aberto ? 'rgba(220,252,231,0.95)' : 'rgba(254,226,226,0.95)'}}>
                  <div className="rest-badge-dot" style={{background: r.aberto ? '#16a34a' : '#dc2626'}}/>
                  <span className="rest-badge-txt" style={{color: r.aberto ? '#15803d' : '#b91c1c'}}>
                    {r.aberto ? 'Aberto' : 'Fechado'}
                  </span>
                </div>
              </div>
              <div className="rest-body">
                <div className="rest-head">
                  <span className="rest-name">{r.nome}</span>
                  <span className="rest-rating">★ {r.nota}</span>
                </div>
                <p className="rest-esp">{r.esp}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}