# Projeto *PalpiteBox*

[![HitCount](http://hits.dwyl.com/llutti/llutti/palpitebox.svg)](http://hits.dwyl.com/llutti/llutti/palpitebox)

Uma caixa de sugestões na qual os clientes podem deixar opiniões e sugestões sobre os estabelecimentos comerciais e, em troca, receber cupons de desconto e vantagens.

![Print da tela do aplicativo](https://github.com/llutti/palpitebox/blob/master/screens/Print-tela-principal.png)

### Pré-requisitos:
- NodeJS (versão 12 ou superior) [https://www.nodejs.org]
- NPM [*instalado juntamento com o NodeJS*] ou YARN [https://classic.yarnpkg.com/]
- Editor de código (Visual Studio Code, por exemplo) [https://code.visualstudio.com/]

## Construído com:
* [NodeJS](https://www.nodejs.org)
* [NextJS](https://nextjs.org/) - React Framework.
* [TailwindCSS](https://tailwindcss.com/) - Um CSS framework para rápida contrução de interfaces customizadas.
* [Figma](https://figma.com/) - Ferramenta Online para prototipagem.
* [PurgeCSS](https://purgecss.com/) - Remover CSS não utilizados.
* [Google Docs](https://g.co/kgs/MVHtjb) - Planilha utilizada como repositório

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
- `yarn add swr`
- `yarn add google-spreadsheet`
- `yarn add moment`

## Author:

* **Luciano Cargnelutti** - [LinkedIn](https://www.linkedin.com/in/llutti/)



## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.

## Acknowledgments

* Projeto desenvolvido durante o workshop online **Semana Fullstack Master** do [DevPleno](https://devpleno.com).