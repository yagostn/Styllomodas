# Styllo Modas

Styllo Modas é uma aplicação de e-commerce desenvolvida com React, TypeScript e Tailwind CSS, focada em proporcionar uma experiência moderna e responsiva para vendas de moda online.

## Funcionalidades

- **Catálogo de Produtos:** Visualização de produtos com filtros por categoria, gênero, preço, novidades e disponibilidade em estoque.
- **Carrinho de Compras:** Adicione, remova e altere quantidades de produtos no carrinho.
- **Detalhes do Produto:** Página dedicada com informações detalhadas, seleção de tamanho/cor e imagens em destaque.
- **Checkout Simples:** Resumo do pedido e simulação de finalização de compra.
- **Design Responsivo:** Layout adaptado para dispositivos móveis e desktop.
- **Filtros Avançados:** Filtre produtos por gênero, categoria, faixa de preço, novidades e disponibilidade.
- **Componentização:** Componentes reutilizáveis para cartões de produto, filtros, cabeçalho, rodapé, etc.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)

## Como rodar o projeto

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repositorio>
   cd Styllomodas
   ```
2. **Instale as dependências:**
   ```sh
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```
4. **Acesse no navegador:**
   Abra [http://localhost:5173](http://localhost:5173)

## Estrutura de Pastas

- `src/components`: Componentes reutilizáveis (Header, Footer, ProductCard, etc)
- `src/pages`: Páginas principais (Home, Produtos, Carrinho, Checkout)
- `src/data`: Dados mockados dos produtos
- `src/store`: Gerenciamento de estado do carrinho
- `src/types`: Tipos TypeScript compartilhados
- `src/utils`: Funções utilitárias

## Personalização

- As cores, textos e imagens podem ser facilmente alterados em `tailwind.config.js`, nos componentes e na pasta `public/img`.
