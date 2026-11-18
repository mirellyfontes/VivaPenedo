import { useEffect, useState } from 'react';
import Axios from 'axios';

const MESES = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];

function CardEvento(props) {
  const [ano, mes, dia] = props.data.split('-');

return (
  <article className="card-rest evento-card">
    <div className="evento-data">
      <span className="evento-dia">{dia}</span>
      <span className="evento-mes">{MESES[Number(mes) - 1]}</span>
    </div>
    <div className="rest-body">
      <span className="rest-name">{props.titulo}</span>
      <p className="rest-esp">{props.descricao}</p>
      <div className="card-meta-row">{props.local} · {props.horario.slice(0, 5)}</div>
    </div>
  </article>
);
}

export default function Eventos() {
  const [listaEventos, setListaEventos] = useState();

  useEffect(() => {
    Axios.get('http://localhost:3001/getEventos').then((response) => {
      setListaEventos(response.data);
    });
  }, []);

  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-label">Agenda</p>
        <h2 className="section-title">Próximos eventos</h2>

        <div className="rest-grid">
          {typeof listaEventos !== 'undefined' &&
            listaEventos.map((value) => (
              <CardEvento
                key={value.idevento}
                titulo={value.titulo}
                descricao={value.descricao}
                local={value.local}
                data={value.data}
                horario={value.horario}
              />
            ))}
        </div>
      </div>
    </section>
  );
}