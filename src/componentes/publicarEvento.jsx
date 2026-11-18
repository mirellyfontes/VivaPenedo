import { useState } from 'react';
import Axios from 'axios';

export default function PublicarEvento() {
  const [values, setValues] = useState({});
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const handleChangeValues = (e) => {
    setValues((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClickButton = (e) => {
    e.preventDefault();

    if (!values.titulo || !values.descricao || !values.local || !values.data || !values.horario) {
      setErro('Preencha todos os campos.');
      setMensagem('');
      return;
    }

    Axios.post('http://localhost:3001/cadastrarEvento', {
      titulo: values.titulo,
      descricao: values.descricao,
      local: values.local,
      data: values.data,
      horario: values.horario,
    })
      .then(() => {
        setMensagem('Evento cadastrado com sucesso!');
        setErro('');
      })
      .catch(() => {
        setErro('Erro ao cadastrar. Verifique se o servidor está rodando.');
        setMensagem('');
      });
  };

  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-label">Agenda</p>
        <h2 className="section-title">Publicar evento</h2>

        {mensagem && <p className="form-sucesso">{mensagem}</p>}
        {erro && <p className="form-erro">{erro}</p>}

        <form className="form-evento">
          <label>
            Título
            <input type="text" name="titulo" maxLength={100} onChange={handleChangeValues} />
          </label>

          <label>
            Descrição
            <input type="text" name="descricao" maxLength={100} onChange={handleChangeValues} />
          </label>

          <label>
            Local
            <input type="text" name="local" maxLength={100} onChange={handleChangeValues} />
          </label>

          <label>
            Data
            <input type="date" name="data" onChange={handleChangeValues} />
          </label>

          <label>
            Horário
            <input type="time" name="horario" onChange={handleChangeValues} />
          </label>

          <button className="btn-orange" onClick={handleClickButton}>
            Publicar evento
          </button>
        </form>
      </div>
    </section>
  );
}
