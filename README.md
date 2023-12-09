# Driven-Trackit 📈
Single-Page-Application (SPA) para uma aplicação completa de acompanhamento de hábitos utilizando React, Styled Components, React Router, Axios, Loader, Dayjs e React-Calendar.

## Requisitos Obrigatórios ⚠️
### Componentização e Rotas de Navegação de Páginas:
- Os elementos da página devem ser componentizados com React em arquivos separados.
- Utilização do React Router para navegação das páginas.
### Animação de _Loading_:
- Utilizar animação de _loading_ enquanto estiver carregando os dados.
## Local Storage e Context API:
- Utilizar Local Storage para armazenar _token_ da sessão.
- Utilizar Context API para repassar as variáveis de estado da aplicação.
### Login/Cadastro:
- Login: Deve ser enviado o email e senha para a API.
- Cadastro: Deve ser enviado nome, email, senha e avatar para a API.
### Header/Footer:
- Footer: Deve ser exibida a foto do usuário.
- Header: Deve conter uma barra de progresso indicando a porcentagem e conclusão de hábitos de hoje do usuário e 3 botões que devem redirecionar o usuário para as páginas **hábitos**, **hoje** e **histórico**.
### Habitos:
- Carregar os hábitos criados do usuário.
- Opções para criar e deletar hábitos.
### Hoje:
- Carregar os hábitos diários do usuário.
- Ao marcar ou desmarcar um hábito, altera a barra de progresso.
### Histórico:
- Exibir um calendário que contém informações sobre os hábitos que foram/ou não concluídos pelo usuário.
- Deve ser exibido em verde os dias em que o usuário completou todos os hábitos que deveria ter completado.
- Devem ser destacados em vermelho os dias em que o usuário não completou todos os hábitos.


## Deploy do Projeto 💻

Deploy :https://projeto11-trackit-one-kohl.vercel.app/

## Available Scripts:

In the project directory, you can run:

- First clone this repository

- Run: npm i -y 

- Run: npm start

- Run: npm run dev (with nodemon)