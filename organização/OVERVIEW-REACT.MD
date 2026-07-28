# Overview técnico — como vamos construir o projeto

---

## VISÃO GERAL

O projeto é um site React sem backend. Todo dado (animais, eventos, voluntários, etc.) vai ficar em arquivos JSON dentro do próprio projeto. O React vai ler esses arquivos e montar as telas. Simples assim.

Abaixo, cada etapa em ordem do que vamos fazer.

---

## ETAPA 1 — Criar o projeto React

Usaremos o **Vite** para criar o projeto. Vite é uma ferramenta moderna que monta o projeto React muito mais rápido que o antigo Create React App.

O que ele entrega pra gente:
- Pasta do projeto já estruturada
- Servidor local para rodar o site no navegador enquanto desenvolvemos
- Build final para gerar o site estático para publicar

Comando para criar:
```bash
npm create vite@latest react-ong-page -- --template react
cd react-ong-page
npm install
npm run dev
```

Depois disso, o site já abre no navegador em `http://localhost:5173`.

---

## ETAPA 2 — Instalar as dependências que vamos usar

Além do React puro, vamos instalar algumas bibliotecas:

| Biblioteca | Para que serve |
|-----------|----------------|
| `react-router-dom` | Criar as rotas (`/animais`, `/voluntariado`, etc.) |
| `tailwindcss` | Estilização rápida com classes CSS prontas |

Comando:
```bash
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## ETAPA 3 — Estrutura de pastas

Como vamos organizar os arquivos dentro do projeto:

```
src/
├── assets/          → imagens, ícones, logos
├── components/      → peças reutilizáveis (Card, Header, Footer, Button...)
├── pages/           → uma pasta por página (Home, Animais, Voluntariado...)
├── data/            → os arquivos JSON com os dados simulados
├── App.jsx          → onde ficam definidas as rotas
└── main.jsx         → ponto de entrada do React (não mexemos muito aqui)
```

---

## ETAPA 4 — Os dados (JSON)

Como não temos backend, os dados ficam em arquivos `.json` dentro de `src/data/`.

Exemplo de como um animal fica no JSON:

```json
// src/data/animais.json
[
  {
    "id": 1,
    "nome": "Thor",
    "especie": "cão",
    "raca": "Vira-lata",
    "porte": "médio",
    "idade": "2 anos",
    "sexo": "macho",
    "status": "disponível",
    "fotos": ["thor1.jpg", "thor2.jpg"],
    "historia": "Thor foi resgatado da rua em 2023...",
    "vacinado": true,
    "castrado": true,
    "criancas": true,
    "outrosPets": true
  }
]
```

No componente React, importamos o JSON direto — sem precisar de API ou fetch:

```jsx
import animais from '../data/animais.json'

// animais agora é um array JavaScript normal
// podemos usar .filter(), .map(), etc.
```

---

## ETAPA 5 — Componentes React

React funciona com **componentes**: pedaços de interface que você cria uma vez e reutiliza em qualquer lugar.

Exemplo prático — card de animal:

```jsx
// src/components/AnimalCard.jsx

function AnimalCard({ animal }) {
  return (
    <div>
      <img src={animal.fotos[0]} alt={animal.nome} />
      <h2>{animal.nome}</h2>
      <p>{animal.especie} · {animal.porte} · {animal.idade}</p>
      <span>{animal.status}</span>
      <button>Conhecer</button>
    </div>
  )
}

export default AnimalCard
```

Esse componente recebe um animal como "propriedade" (prop) e exibe os dados. Na página de listagem, fazemos um loop e renderizamos um card para cada animal do JSON:

```jsx
import animais from '../data/animais.json'
import AnimalCard from '../components/AnimalCard'

function PaginaAnimais() {
  return (
    <div>
      {animais.map(animal => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  )
}
```

---

## ETAPA 6 — Rotas (React Router)

O React Router é o que faz o site ter múltiplas páginas sem recarregar o navegador.

Configuramos as rotas no `App.jsx`:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Animais from './pages/Animais'
import AnimalDetalhe from './pages/AnimalDetalhe'
import Voluntariado from './pages/Voluntariado'
import PerdidosEncontrados from './pages/PerdidosEncontrados'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                      element={<Home />} />
        <Route path="/animais"               element={<Animais />} />
        <Route path="/animais/:id"           element={<AnimalDetalhe />} />
        <Route path="/voluntariado"          element={<Voluntariado />} />
        <Route path="/perdidos-encontrados"  element={<PerdidosEncontrados />} />
      </Routes>
    </BrowserRouter>
  )
}
```

Para navegar entre páginas nos componentes, usamos o `<Link>` do React Router (não `<a href>`):

```jsx
import { Link } from 'react-router-dom'

<Link to="/animais">Ver todos os animais</Link>
```

Para pegar o `:id` da URL na página de detalhe do animal:

```jsx
import { useParams } from 'react-router-dom'
import animais from '../data/animais.json'

function AnimalDetalhe() {
  const { id } = useParams()
  const animal = animais.find(a => a.id === Number(id))

  return <div>{animal.nome}</div>
}
```

---

## ETAPA 7 — Estado e filtros (useState)

Para fazer os filtros da página de animais funcionar, usamos o **useState** do React.
`useState` é uma forma de guardar um valor que, quando muda, atualiza a tela automaticamente.

```jsx
import { useState } from 'react'
import animais from '../data/animais.json'

function PaginaAnimais() {
  const [filtroEspecie, setFiltroEspecie] = useState('todos')

  const animaisFiltrados = animais.filter(animal => {
    if (filtroEspecie === 'todos') return true
    return animal.especie === filtroEspecie
  })

  return (
    <div>
      <select onChange={e => setFiltroEspecie(e.target.value)}>
        <option value="todos">Todos</option>
        <option value="cão">Cães</option>
        <option value="gato">Gatos</option>
      </select>

      {animaisFiltrados.map(animal => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  )
}
```

Quando o usuário muda o select → `setFiltroEspecie` atualiza o estado → React re-renderiza a lista filtrada automaticamente.

---

## ETAPA 8 — Estilização com Tailwind

Com Tailwind, estilizamos direto na classe do elemento, sem escrever CSS separado.

```jsx
<div className="flex flex-col gap-4 p-6 rounded-lg shadow-md bg-white">
  <h2 className="text-xl font-bold text-gray-800">{animal.nome}</h2>
  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
    Conhecer
  </button>
</div>
```

Parece estranho no começo mas acelera muito o desenvolvimento.

---

## ETAPA 9 — Publicação (depois que o site estiver pronto)

Quando o site estiver pronto, geramos a versão final com:

```bash
npm run build
```

Isso cria uma pasta `dist/` com os arquivos prontos para publicar. Para hospedar de graça e com URL pública (ótimo para portfólio), usamos o **Vercel** ou **Netlify** — basta conectar ao repositório do GitHub e eles publicam automaticamente.

---

## RESUMO DA ORDEM DE DESENVOLVIMENTO

1. Criar o projeto com Vite
2. Instalar React Router e Tailwind
3. Montar a estrutura de pastas
4. Criar os arquivos JSON com dados simulados
5. Criar os componentes reutilizáveis (Header, Footer, Card...)
6. Montar a Landing Page seção por seção
7. Criar as páginas separadas (Animais, Voluntariado, Perdidos)
8. Conectar os dados JSON às páginas
9. Fazer os filtros funcionarem com useState
10. Ajustar visual e responsividade
11. Publicar no Vercel/Netlify e colocar no portfólio
