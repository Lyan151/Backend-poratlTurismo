# 📦 Projeto Backend - API REST com Node.js e Express

Este projeto é um backend desenvolvido com **Node.js** e **Express**, com funcionalidades como autenticação, requisições externas e controle de acesso via CORS.

## 🚀 Tecnologias Utilizadas

- [Express](https://expressjs.com/) – Framework para criação de servidores em Node.js
- [bcrypt](https://www.npmjs.com/package/bcrypt) – Para hash de senhas e segurança de autenticação
- [axios](https://www.npmjs.com/package/axios) – Cliente HTTP para consumir APIs externas
- [cors](https://www.npmjs.com/package/cors) – Middleware para controle de acesso entre domínios (CORS)

## 📁 Estrutura do Projeto

/src
├── controllers/
├── routes/
├── services/
├── middlewares/
├── models/
└── app.js
server.js

bash
Copiar
Editar



> A estrutura pode variar conforme seu projeto, mas esta é uma sugestão modular.

## ⚙️ Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git



2. Instale as dependências:

bash
Copiar
Editar
npm install



3. Inicie o servidor:

bash
Copiar
Editar
npm start


### 🔐 Funcionalidades implementadas
Registro e login com senhas criptografadas (usando bcrypt)

Comunicação com APIs externas via axios

Middleware de segurança para CORS (usando cors)

Estrutura pronta para rotas, controllers e middlewares personalizados


### Dependências principais
json
Copiar
Editar
"dependencies": {
  "express": "^4.x",
  "bcrypt": "^5.x",
  "axios": "^1.x",
  "cors": "^2.x"
}


### Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

### 🛠 Feito por Lyan – Projeto para fins educacionais e práticos.

yaml
Copiar
Editar
