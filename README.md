# Petshop

Loja virtual de produtos para pets, com listagem de produtos e carrinho de compras.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Sobre o projeto

Aplicação front-end que simula uma loja de petshop. Os produtos (rações, por exemplo) são buscados de uma API local e o cliente pode adicionar itens ao carrinho e acompanhar o total da compra.

## Funcionalidades

- Listagem de produtos com imagem, descrição e preço
- Adicionar produtos ao carrinho
- Página do carrinho
- Navegação entre páginas com React Router
- Estado do carrinho compartilhado com Context API

## Tecnologias

| Área | Ferramentas |
| --- | --- |
| Interface | React 19, TypeScript |
| Estilo | Tailwind CSS 4, React Icons |
| Rotas | React Router |
| Estado | Context API |
| Requisições | Axios |
| API de teste | JSON Server (`db.json`) |
| Build | Vite |

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20+.

```bash
# clonar o repositório
git clone https://github.com/ThiagoFelix22/petshop.git
cd petshop

# instalar dependências
npm install

# terminal 1: subir a API fake com os produtos (porta 3000)
npx json-server@0.17.4 --watch db.json --port 3000

# terminal 2: iniciar a aplicação
npm run dev
```

Abra o endereço que o Vite mostrar no terminal (normalmente `http://localhost:5173`).

## Estrutura

```
src/
├── components/   # header, layout e card de produto
├── context/      # estado global do carrinho
├── pages/        # home e carrinho
└── services/     # configuração do Axios
```

## Autor

**Thiago Felix** · [GitHub](https://github.com/ThiagoFelix22)
