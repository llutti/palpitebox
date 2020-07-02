# Projeto *PalpiteBox*

  Projeto desenvolvido durante o workshop online **Semana Fullstack Master**, patrocinado pela [DevPlano](https://devpleno.com).

## Escopo do projeto
Uma caixa de sugestões na qual os clientes podem deixar opiniões e sugestões sobre os estabelecimentos comerciais e, em troca, receber cupons de desconto e vantagens.

As principais tecnologias e/ou ferramentas que serão utilizadas  para a criação desta solução:
- NodeJS [https://www.nodejs.org]
- React [https://pt-br.reactjs.org/]
- NextJS [https://nextjs.org/]
- Tailwindcss [https://tailwindcss.com/]
- Planilha do Google Docs [https://g.co/kgs/MVHtjb]

## Pré-requisitos para criação do projeto
- NodeJS (versão 12 ou superior) [https://www.nodejs.org]
- NPM [*instalado juntamento com o NodeJS*] ou YARN [https://classic.yarnpkg.com/]
- Editor de código (Visual Studio Code, por exemplo) [https://code.visualstudio.com/]

## Criar o projeto
- Criar a pasta: `md palpitebox`
- Entrar na pasta: `cd palpitebox`
- Inicializar o gerenciador de pacotes: `yarn init -y` ou `npm ini -y`
- Editar o arquivo `package.json` e configurar os `scripts` conforme abaixo:
  ``` json
    ...
    "scripts": {
      "dev": "next",
      "start": "next start",
      "build": "next build"
    },
    ...
  ```

## Instalação das dependencias
- `yarn add next react react-dom`
- `yarn add tailwindcss`
- `npx tailwindcss init`
- `yarn add postcss-import`
- `yarn add autoprefixer`