## Projeto Acster Dashboard

Este é um projeto Dashboard com Next14 e TypeScript. Este projeto tomou como base o curso de Next14 da própria plataforma para por em prática todas as features novas do Next14.
Foram utilizadas features como server actions, lidando com todos os erros com a página error.tsx, página 404 customizada com not-found.tsx, autenticação com Next Auth, página de loading.tsx, e React Suspense.
Além disso, foi utilizado mecanismo de pesquisa/busca de dados por meio de url query, sem utilização de useState/useEffect do React. Esse mecanismo possui diversas vantagens, como por exemplo:

1. URLs marcáveis ​​e compartilháveis: como os parâmetros de pesquisa estão na URL, os usuários podem favoritar o estado atual do aplicativo, incluindo suas consultas de pesquisa e filtros, para referência ou compartilhamento futuro.
2. Renderização do lado do servidor e carregamento inicial: os parâmetros de URL podem ser consumidos diretamente no servidor para renderizar o estado inicial, facilitando o manuseio da renderização do servidor.
3. Análise e rastreamento: ter consultas de pesquisa e filtros diretamente no URL facilita o rastreamento do comportamento do usuário sem exigir lógica adicional do lado do cliente.


## Tecnologias Utilizadas

React

TypeScript

Next.js 14

Next Auth

Postgres

Prisma

Flowbite css/react: Uma biblioteca de componentes de UI reutilizáveis e estilizáveis.

Tailwind CSS

Biblioteca externa para gráficos(recharts)

## Funcionalidades

Login com o NextAuth: Permitimos que os usuários façam login com toda estrutura utilizada pelo Next Auth

Rotas Protegidas: Utilização de middleware para proteger rotas de usuários não autenticados.

Filtro de Pesquisa por query URL: Seleção de dados seguindos os padrões atuais para melhor comportamento do componente

Criação, Leitura, Edição e Exclusão(CRUD): CRUD dos dados de Fatura utilizando server actions.

Gráfico: Gráfico dinâmico com biblioteca externa(Recharts) com base nos dados criados das faturas.

Responsividade: Aplicativo que se adequa às telas dos dispositivos.
