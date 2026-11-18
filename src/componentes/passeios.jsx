import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const PASSEIOS = [
  { id:1, tag:'Mais vendido', destino:'Foz do São Francisco', titulo:'Penedo → Foz do São Francisco', duracao:'6h · Saída 8h',    vagas:'Restam 2 vagas', preco:'R$ 120', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRj-oFVrVoUDbRlk9WtY8ndLzlyWxfqQ9Gsa3aotLYw&s=10' },
  
  { id:2, tag:'Popular',      destino:'Passeio de Catamarã',    titulo:'Penedo → Passeio Pelo Rio',          duracao:'3h · Saída 9h e 14h', vagas:'Restam 4 vagas', preco:'R$ 80',  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ug1rO9MjEfVjGyN4JM7F3U-XNt6Y8cqQ8yNSpX4rQw&s=10', whatsapp:'5582999990002' },

  { id:3, tag:'Romântico',    destino:'Neópolis, SE',         titulo:'Penedo → Neópolis · Pôr do Sol',  duracao:'2h · Saída 16h30',    vagas:'Restam 5 vagas', preco:'R$ 65',  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMa7cP2O_bXVDLxrtqVazBHZhT4_mjMPLJ4hB8CxQJE8XzFoPJjDKwDMr&s=10', whatsapp:'5582999990003' },
]

function CardPasseio({ p }) {
  return (
    <article className="card-passeio">
      <div className="card-img-wrap">
        <img className="card-img" src={p.img} alt={p.titulo}/>
        <div className="card-gradient"/>
        <span className="card-tag">{p.tag}</span>
        <p className="card-img-title">{p.titulo}</p>
      </div>
      <div className="card-body">
        <div className="card-meta">
          <div className="card-meta-row"><FaClock color="var(--orange)" />{p.duracao}</div>
          <div className="card-meta-row"><FaMapMarkerAlt color="var(--orange)" />{p.destino}</div>
        </div>
        <div className="card-footer">
          <span className="card-vagas">{p.vagas}</span>
          <div>
            <span className="card-price-label">a partir de</span>
            <span className="card-price">{p.preco}<small>/pess.</small></span>
          </div>
        </div>
        <button type="button" className="btn-whatsapp">
          <FaWhatsapp size={16} />
          Agendar via WhatsApp
        </button>
      </div>
    </article>
  )
}

export default function Passeios({ mostrarLink = true }) {
  return (
    <section id="passeios" className="section">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="section-label">Turismo fluvial</p>
            <h2 className="section-title">Passeios no Velho Chico</h2>
          </div>
          {mostrarLink && <Link to="/passeios" className="section-link">Ver todos →</Link>}
        </div>
        <div className="cards-row">
          {PASSEIOS.map(p => <CardPasseio key={p.id} p={p}/>)}
        </div>
      </div>
    </section>
  )
}