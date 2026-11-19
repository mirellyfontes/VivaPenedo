CREATE DATABASE IF NOT EXISTS vivapenedo;
USE vivapenedo;

CREATE TABLE IF NOT EXISTS eventos (
  idevento INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  descricao VARCHAR(100) NOT NULL,
  local VARCHAR(100) NOT NULL,
  data DATE NOT NULL,
  horario TIME NOT NULL,
  PRIMARY KEY (idevento)
);

INSERT INTO eventos (titulo, descricao, local, data, horario) VALUES
('Forró na Orla', 'Trio pé de serra ao vivo', 'Orla do Rio São Francisco', '2026-12-05', '20:00'),
('Feira de Artesanato', 'Rendas e bordados locais', 'Praça Barão de Penedo', '2026-12-06', '09:00');
