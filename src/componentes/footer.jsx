export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">Viva<span>Penedo</span></p>
          <p className="footer-desc">Guia de turismo e vida noturna em Penedo Alagoas às margens do Rio São Francisco.</p>
        </div>
        {[
          { col:'Explorar', links:['Passeios','Gastronomia','Eventos','Vida Noturna'] },
          { col:'Penedo',   links:['Sobre a cidade','Como chegar','Hospedagem','Contato'] },
        ].map(({ col, links }) => (
          <div key={col} className="footer-col">
            <span className="footer-col-title">{col}</span>
            {links.map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} VivaPenedo · Penedo, Alagoas</p>
        <p className="footer-copy">Feito por uma penedense.</p>
      </div>
    </footer>
  )
}