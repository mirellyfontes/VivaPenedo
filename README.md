# VivaPenedo

Um guia web dinâmico e interativo para centralizar informações sobre turismo fluvial, gastronomia e eventos na cidade de Penedo, Alagoas.

Este projeto foi desenvolvido como requisito de avaliação (AB1 e AB2) para a disciplina de **Programação Web I**, ministrada pelo professor Gustavo Miranda, no curso de Sistemas de Informação da Universidade Federal de Alagoas (UFAL) - Campus Arapiraca / Unidade Penedo.

## 🎯 O Problema e a Solução

**Problema:** Moradores, estudantes universitários e turistas enfrentam dificuldades para encontrar informações centralizadas sobre horários de lanchas/catamarãs no Rio São Francisco, restaurantes abertos em dias de baixo movimento e a agenda de eventos da cidade, dependendo quase exclusivamente do "boca a boca" ou de postagens efêmeras no Instagram.

**Solução:** O *VivaPenedo* atua como um portal unificado onde o usuário pode visualizar passeios fluviais (com link direto para agendamento no WhatsApp), conferir quais restaurantes estão abertos ou fechados e acompanhar a **agenda de eventos da cidade**. Na AB2, a agenda passou a ser salva em um **banco de dados MySQL**: qualquer pessoa pode publicar um evento pelo formulário do site, e ele aparece na agenda para todos os visitantes.

## 🗂️ Estrutura do projeto

```
VivaPenedo/
├── public/
│   └── index.html          # Página HTML inicial
├── src/                    # Front-end (React)
│   ├── App.js              # Rotas do site
│   ├── index.css           # Estilos
│   ├── paginas/
│   │   └── home.jsx        # Página inicial com todas as seções
│   └── componentes/        # Navbar, Hero, Passeios, Gastronomia, Eventos, PublicarEvento, Footer
└── server/                 # Back-end (Node.js + Express)
    ├── index.js            # Conexão com o MySQL e rotas da API
    └── banco.sql           # Script que cria o banco e a tabela
```

## 💻 Tecnologias e Requisitos Técnicos Aplicados

| Parte | Tecnologias |
|---|---|
| Front-end | React, React Router, React Icons, Axios, CSS3 com Flexbox e Grid |
| Back-end | Node.js, Express, CORS, Nodemon |
| Banco de dados | MySQL |

O projeto atende aos requisitos da Tabela 1 da disciplina:

| Requisito | Onde está no código |
|---|---|
| Página HTML inicial | `public/index.html` e `src/paginas/home.jsx` |
| Dividir a página em partes | Componentes `Navbar`, `Hero`, `Passeios`, `Gastronomia`, `Eventos`, `PublicarEvento` e `Footer` |
| Comandos de locomoção dos componentes | Flexbox e Grid no CSS; `Link`, `useNavigate` e `scrollIntoView` na `Navbar` e no `Hero` |
| Estilização em texto | `index.css`: fontes Montserrat e Poppins, hierarquia de títulos, cores |
| Estilização em imagens | `index.css`: `object-fit: cover`, `border-radius`, zoom no hover, sobreposição em degradê no banner |
| Rotas | `src/App.js`: páginas `/`, `/passeios` e `/gastronomia` com React Router |
| Props | `CardPasseio` e `CardEvento` recebem os dados por props; `mostrarLink`, `atualizar` e `onPublicado` |
| Biblioteca de ícones | `react-icons` nos cards de passeio, restaurante e evento |
| onChange e onClick | Formulário de `PublicarEvento`, botões da `Navbar` e do `Hero` |
| useState e renderização condicional | Estados do formulário e da agenda; mensagens de sucesso e erro; status aberto/fechado; link "Ver todos" |
| Conexão com banco de dados | `server/index.js` (Express + MySQL) e `Axios` em `Eventos` e `PublicarEvento` |

## 🗄️ Banco de dados

Tabela `eventos`:

| Coluna | Tipo | Descrição |
|---|---|---|
| `idevento` | `INT` (chave primária, auto incremento) | Identificador único do evento |
| `titulo` | `VARCHAR(100)` | Nome do evento |
| `descricao` | `VARCHAR(100)` | Descrição curta |
| `local` | `VARCHAR(100)` | Onde acontece |
| `data` | `DATE` | Dia do evento |
| `horario` | `TIME` | Horário de início |

Todas as colunas são obrigatórias (`NOT NULL`).

### Rotas da API

| Método | Rota | O que faz |
|---|---|---|
| `GET` | `/getEventos` | Lista os eventos ordenados por data e horário (`SELECT`) |
| `POST` | `/cadastrarEvento` | Cadastra um novo evento (`INSERT`) |

## 🚀 Como executar o projeto na sua máquina

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [MySQL Server e MySQL Workbench](https://dev.mysql.com/downloads/windows/) (na instalação, escolha **Use Legacy Authentication Method**)

### 1. Clonar o repositório

```bash
git clone https://github.com/mirellyfontes/VivaPenedo.git
cd VivaPenedo
```

### 2. Criar o banco de dados

1. Abra o **MySQL Workbench** e conecte na instância local.
2. Abra o arquivo `server/banco.sql` (*File > Open SQL Script*).
3. Execute o script inteiro clicando no ícone do raio ⚡.

### 3. Iniciar o servidor

Abra `server/index.js` e troque a senha da conexão pela senha do seu MySQL:

```js
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "SUA_SENHA_AQUI",
  database: "vivapenedo",
  dateStrings: true,
});
```

Depois, em um terminal:

```bash
cd server
npm install
npm run dev
```

A mensagem `rodando servidor` deve aparecer. O servidor fica em `http://localhost:3001`.

### 4. Iniciar o site

Em **outro** terminal, na raiz do projeto (deixe o servidor rodando):

```bash
npm install
npm start
```

O site abre em `http://localhost:3000`.

### Problemas comuns

- **`ER_NOT_SUPPORTED_AUTH_MODE` no terminal do servidor:** o MySQL foi instalado com o método de autenticação novo. Execute no Workbench, trocando a senha:
  ```sql
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SUA_SENHA_AQUI';
  FLUSH PRIVILEGES;
  ```
- **`ER_ACCESS_DENIED_ERROR`:** a senha em `server/index.js` está diferente da senha do MySQL.
- **A agenda não mostra eventos ou o formulário mostra "Erro ao cadastrar":** o servidor não está rodando. Confira o passo 3.
