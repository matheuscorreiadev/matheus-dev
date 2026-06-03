# Matheus Correia | Portfólio Full Stack

Portfólio profissional desenvolvido para apresentar minha trajetória, minhas principais competências técnicas, projetos em destaque, serviços e canais de contato.

O objetivo deste projeto é transmitir uma imagem mais moderna e profissional, mostrando não apenas tecnologias, mas também como elas são aplicadas na construção de soluções web completas, responsivas e focadas em performance.

## Sobre mim

Sou estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento Full Stack.

Tenho experiência na construção de aplicações web modernas utilizando React, Next.js, Node.js e bancos de dados relacionais. Meu objetivo é desenvolver soluções que entreguem valor real para empresas e usuários, combinando performance, organização de código e interfaces fáceis de usar.

Atualmente estudo e desenvolvo projetos com foco em front-end moderno, APIs REST, integração com banco de dados, deploy de aplicações e boas práticas de desenvolvimento.

## Tecnologias usadas no projeto

### Next.js

O Next.js foi usado como framework principal da aplicação.

Ele é responsável pela estrutura do projeto, renderização das páginas, organização por componentes e otimização da aplicação para produção.

Onde foi usado:

- Estrutura principal em `src/app/page.tsx`
- Layout global em `src/app/layout.tsx`
- Organização da aplicação com App Router
- Build otimizado para produção

### React

O React foi usado para criar os componentes reutilizáveis da interface.

Cada seção do portfólio foi separada em um componente próprio, deixando o código mais organizado e fácil de manter.

Onde foi usado:

- Hero Section
- Sobre mim
- Hard Skills
- Soft Skills
- Projetos
- Timeline
- GitHub Stats
- Serviços
- Contato
- Navbar e menu mobile

### TypeScript

O TypeScript foi usado para trazer mais segurança ao código, ajudando a evitar erros comuns durante o desenvolvimento.

Onde foi usado:

- Tipagem dos componentes React
- Tipagem das propriedades do menu mobile
- Tipagem dos ícones usados nas listas de skills
- Organização dos dados dos projetos

### Tailwind CSS

O Tailwind CSS foi usado para estilizar toda a interface de forma rápida, responsiva e consistente.

Ele permitiu criar um visual moderno inspirado em interfaces como Vercel, Linear e Stripe, com fundo escuro, cards com blur, gradientes suaves e espaçamentos bem definidos.

Onde foi usado:

- Layout responsivo
- Hero Section
- Cards de estatísticas
- Cards de skills
- Cards de projetos
- Timeline
- Seção de serviços
- Navbar fixa
- Botões e estados de hover

### CSS Global

Além do Tailwind, o projeto usa CSS global para efeitos visuais mais específicos.

Onde foi usado:

- Fundo escuro premium
- Gradientes suaves
- Efeito glassmorphism
- Efeito de partículas
- Mouse spotlight
- Scroll suave
- Ajustes globais de seleção de texto e acessibilidade

Arquivo principal:

```text
src/app/globals.css
```

### Framer Motion

O Framer Motion foi usado para adicionar animações suaves à interface.

As animações ajudam a deixar a navegação mais fluida sem prejudicar a performance ou exagerar nos efeitos visuais.

Onde foi usado:

- Animação de entrada da Hero Section
- Animação da seção Sobre Mim
- Animação da Timeline
- Animação do menu mobile

### Lucide React

O Lucide React foi usado para adicionar ícones à interface.

Os ícones ajudam a tornar as seções mais visuais e fáceis de escanear.

Onde foi usado:

- Botões da Hero Section
- Hard Skills
- Soft Skills
- Cards de projetos
- GitHub Stats
- Serviços
- Contato
- Navbar mobile

### next/image

O componente `Image` do Next.js foi usado para exibir a imagem de perfil com melhor otimização.

Onde foi usado:

- Seção Sobre Mim
- Imagem localizada em `public/images/perfil.png`

### GitHub Readme Stats

O projeto usa imagens dinâmicas do GitHub Readme Stats e Streak Stats para exibir informações do perfil GitHub.

Onde foi usado:

- Estatísticas de repositórios
- Sequência de commits
- Linguagens mais usadas

Seção responsável:

```text
src/components/GitHubStats.tsx
```

## Estrutura das seções

### Hero Section

Primeira seção do portfólio.

Apresenta o posicionamento profissional como Desenvolvedor Full Stack, uma breve descrição objetiva e dois botões principais:

- Ver Projetos
- Baixar Currículo

Também inclui estatísticas de autoridade visual:

- +15 Projetos Desenvolvidos
- +500 Horas de Estudo
- 100% Responsivo
- GitHub Ativo

### Sobre Mim

Seção criada para apresentar minha formação, foco profissional e objetivo como desenvolvedor.

O texto evita frases genéricas e comunica de forma mais direta minha área de atuação, tecnologias utilizadas e tipo de solução que busco desenvolver.

### Hard Skills

As tecnologias foram organizadas por categoria para facilitar a leitura:

- Front-end
- Back-end
- Banco de Dados
- Ferramentas
- Deploy & Cloud

Essa organização mostra melhor a visão Full Stack e deixa claro onde cada tecnologia se encaixa.

### Soft Skills

Seção adicionada para apresentar competências comportamentais importantes no mercado de trabalho.

Inclui:

- Comunicação
- Trabalho em equipe
- Resolução de problemas
- Aprendizado contínuo
- Organização
- Adaptabilidade
- Pensamento analítico
- Gestão de tempo

### Projetos em Destaque

Os cards de projetos foram reformulados para mostrar mais valor.

Cada projeto apresenta:

- Nome
- Problema que resolve
- Descrição da solução
- Tecnologias utilizadas
- Link Demo
- Link GitHub

Essa estrutura ajuda recrutadores e clientes a entenderem rapidamente o objetivo de cada projeto.

### Minha Jornada

Timeline criada para mostrar a evolução dos estudos e projetos.

Ela apresenta marcos por ano:

- 2024: Início dos estudos em desenvolvimento web
- 2025: Primeiros projetos Full Stack
- 2026: Desenvolvimento de aplicações com Next.js, Node.js e Prisma

### GitHub Stats

Seção dinâmica que mostra informações do perfil GitHub.

Ela ajuda a reforçar atividade, consistência e familiaridade com desenvolvimento versionado.

### Serviços

Seção adicionada para dar uma aparência mais profissional ao portfólio, mesmo com foco em oportunidades de emprego.

Serviços apresentados:

- Desenvolvimento Front-end
- Criação de APIs REST
- Integração com Banco de Dados
- Landing Pages
- Sistemas Web

### Contato

Seção final com chamada direta para contato e links profissionais.

Inclui:

- E-mail
- GitHub
- LinkedIn

## Estrutura de pastas principais

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx

  components/
    About.tsx
    BackgroundEffects.tsx
    Contact.tsx
    Footer.tsx
    GitHubStats.tsx
    Hero.tsx
    MobileMenu.tsx
    Navbar.tsx
    Projects.tsx
    Services.tsx
    Skills.tsx
    Timeline.tsx

  data/
    projects.ts

public/
  images/
    perfil.png
```

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Gera a versão otimizada para produção.

```bash
npm run start
```

Inicia a aplicação em modo produção após o build.

```bash
npm run lint
```

Executa a verificação de lint do projeto.

## Observações

O botão "Baixar Currículo" aponta para:

```text
public/curriculo.pdf
```

Para o botão funcionar corretamente, basta adicionar o arquivo `curriculo.pdf` dentro da pasta `public`.

Os links de Demo e GitHub dos projetos podem ser atualizados no arquivo:

```text
src/data/projects.ts
```

## Objetivo do portfólio

Este portfólio foi desenvolvido para apresentar minhas habilidades como Desenvolvedor Full Stack de forma clara, moderna e profissional.

A proposta é demonstrar domínio em tecnologias front-end e back-end, capacidade de construir interfaces responsivas, organização de código e foco em soluções que resolvem problemas reais.
