# Estrutura de páginas — ONG de adoção de animais

---

## CONCEITO GERAL
- **Landing page extensa** como página principal, com seções navegáveis via âncoras
- **Header fixo (sticky)** com links para as principais seções da landing
- **Páginas separadas** para conteúdos que precisam de espaço próprio (listagem, formulários, perfis)

---

## HEADER (fixo em todas as páginas)
Links de navegação:
- Logo da ONG
- Adotar
- Doe Agora (destaque — botão colorido)
- Voluntariado
- Perdidos e Encontrados
- Eventos
- Sobre
- Contato

---

## LANDING PAGE (página principal `/`)
Seções em ordem de rolagem (com âncoras para o header):

### 1. HERO / BANNER
- Imagem ou carrossel de animais
- Slogan da ONG
- Dois botões principais: "Quero Adotar" e "Quero Doar"

### 2. SOBRE A ONG `#sobre`
- Missão e valores em resumo
- Números de impacto: animais resgatados, adotados, voluntários
- Link para saber mais (caso tenha página própria futuramente)

### 3. ANIMAIS EM DESTAQUE `#animais`
- Cards de 3–6 animais disponíveis para adoção
- Botão "Ver todos os animais" → leva para `/animais`

### 4. COMO ADOTAR `#adotar`
- Passo a passo visual (ícones + texto)
- Requisitos resumidos
- Botão para iniciar o processo

### 5. DOAÇÕES `#doacoes`
- Chamada emocional + foto de impacto
- Meta de arrecadação em destaque (ex: barra de progresso)
- Causas específicas com valores sugeridos
- Lista de itens físicos aceitos
- Botão "Quero Doar"

### 6. VOLUNTARIADO `#voluntariado`
- Tipos de atuação (cards visuais)
- Depoimento de um voluntário
- Botão "Quero ser voluntário" → leva para `/voluntariado`

### 7. HISTÓRIAS DE SUCESSO `#historias`
- Carrossel de animais adotados com foto e depoimento do tutor

### 8. EVENTOS `#eventos`
- Cards dos próximos eventos (data, local, descrição)
- Link para ver todos

### 9. PERDIDOS E ENCONTRADOS `#perdidos`
- Resumo da funcionalidade
- Botões: "Reportar animal perdido" / "Reportar animal encontrado"
- Link para ver listagem completa → `/perdidos-encontrados`

### 10. PARCEIROS `#parceiros`
- Logos dos apoiadores em faixa/carrossel

### 11. CONTATO `#contato`
- Formulário simples (nome, e-mail, mensagem)
- WhatsApp e redes sociais
- Endereço (mapa opcional)

### 12. FOOTER
- Links rápidos
- Redes sociais
- Créditos

---

## PÁGINAS SEPARADAS

---

### PÁGINA: Animais para Adoção `/animais`

**Objetivo:** listagem completa e filtrável de todos os animais disponíveis.

#### Seções:
**1. Header da página**
- Título: "Encontre seu novo melhor amigo"
- Subtítulo com total de animais disponíveis (ex: "87 animais esperando por você")

**2. Barra de filtros**
- Espécie: cão / gato / outro
- Porte: pequeno / médio / grande
- Idade: filhote / jovem / adulto / idoso
- Sexo: macho / fêmea
- Raça (campo de texto ou select)
- Status: disponível / em processo
- Botão "Limpar filtros"

**3. Grid de cards dos animais**
- Foto principal do animal
- Nome, espécie, porte, idade, sexo
- Badge de status (disponível / em processo)
- Botão "Conhecer" → leva para `/animais/:id`

**4. Paginação ou scroll infinito**
- Para não carregar todos de uma vez

---

### PÁGINA: Perfil do Animal `/animais/:id`

**Objetivo:** apresentar o animal em detalhes e capturar interesse de adoção.

#### Seções:
**1. Galeria de fotos**
- Foto principal grande
- Miniaturas clicáveis das demais fotos

**2. Informações principais**
- Nome, espécie, raça, porte, idade, sexo
- Status: disponível / em processo / adotado
- Localização (cidade/bairro do abrigo)

**3. História do animal**
- Texto narrativo sobre o resgate e personalidade
- Tags de temperamento (ex: brincalhão, calmo, sociável, tímido)

**4. Compatibilidade**
- Ícones indicando: vive bem com crianças / outros cães / outros gatos
- Nível de energia: baixo / médio / alto

**5. Cuidados especiais**
- Saúde: vacinado, castrado, vermifugado, microchipado (checklist visual)
- Necessidades especiais, se houver

**6. Formulário de interesse**
- Nome completo
- E-mail
- Telefone / WhatsApp
- Tipo de moradia (casa com quintal, apartamento, etc.)
- Tem outros animais? (sim/não)
- Tem crianças? (sim/não)
- Mensagem livre
- Botão "Quero adotar [nome do animal]"

**7. Outros animais disponíveis**
- 3–4 cards de outros animais ("Veja também")

---

### PÁGINA: Voluntariado `/voluntariado`

**Objetivo:** explicar as formas de atuar e capturar novos voluntários.

#### Seções:
**1. Header da página**
- Título: "Faça a diferença — seja voluntário"
- Subtítulo emocional com número de voluntários ativos

**2. Por que ser voluntário?**
- 3–4 cards com benefícios/impacto do voluntariado
- Foto de voluntários em ação

**3. Tipos de atuação**
Cada tipo em um card com ícone, título, descrição e requisitos:
- **Transporte** — levar animais a consultas e feiras
- **Lar temporário** — acolher animais até serem adotados
- **Cuidados no abrigo** — alimentação, limpeza, socialização
- **Eventos e feiras** — ajudar na organização e divulgação
- **Adestramento** — profissionais que ensinam comandos básicos
- **Divulgação nas redes** — ajudar a divulgar os animais online

**4. Depoimentos de voluntários**
- Carrossel com foto, nome e depoimento de voluntários reais

**5. Agenda de atividades**
- Lista ou calendário de próximas atividades voluntárias
- Data, tipo de atividade, vagas disponíveis

**6. Formulário de cadastro**
- Nome completo
- E-mail
- Telefone / WhatsApp
- Cidade / bairro
- Como prefere ajudar (checkboxes com os tipos de atuação)
- Disponibilidade (dias da semana / horários)
- Tem carro? (sim/não) — relevante para transporte
- Mensagem livre
- Botão "Quero ser voluntário"

---

### PÁGINA: Perdidos e Encontrados `/perdidos-encontrados`

**Objetivo:** conectar tutores que perderam animais com pessoas que encontraram animais na rua.

#### Seções:
**1. Header da página**
- Título: "Perdidos e Encontrados"
- Subtítulo explicando a funcionalidade

**2. Abas de navegação**
- Aba "Perdidos" | Aba "Encontrados"

**3. Listagem (dentro de cada aba)**
- Cards com: foto do animal, espécie, descrição, data do ocorrido, bairro/cidade
- Filtros: espécie, cidade, data
- Botão "Entrar em contato" em cada card (abre WhatsApp ou e-mail)

**4. Formulário — Reportar animal perdido**
- Foto do animal (upload)
- Nome do animal
- Espécie e raça
- Cor / características físicas
- Data que desapareceu
- Bairro / cidade onde desapareceu
- Nome e WhatsApp do tutor
- Observações

**5. Formulário — Reportar animal encontrado**
- Foto do animal (upload)
- Espécie e raça (aproximado)
- Cor / características físicas
- Data que encontrou
- Bairro / cidade onde encontrou
- Situação atual (está com você / deixou no local / levou ao abrigo)
- Nome e WhatsApp de contato
- Observações

**6. Dicas**
- O que fazer ao encontrar um animal na rua
- Como aumentar as chances de encontrar seu pet perdido

---

## DADOS (simulados com JSON/arrays)

| Arquivo | Conteúdo |
|---------|----------|
| `animais.json` | lista de animais com todas as propriedades |
| `historias.json` | histórias de sucesso com foto e depoimento |
| `eventos.json` | próximos eventos |
| `parceiros.json` | logos e nomes dos parceiros |
| `perdidos.json` | animais perdidos e encontrados |
| `voluntarios.json` | depoimentos de voluntários |

---

## RESUMO GERAL DAS PÁGINAS

| Rota | O que é |
|------|---------|
| `/` | Landing page principal — hero, animais em destaque, como adotar, doações, voluntariado, histórias, eventos, parceiros, contato |
| `/animais` | Listagem completa de animais com filtros (espécie, porte, idade, sexo, raça) |
| `/animais/:id` | Perfil detalhado de um animal — fotos, história, saúde, compatibilidade e formulário de adoção |
| `/voluntariado` | Tipos de atuação, depoimentos, agenda e formulário de cadastro de voluntário |
| `/perdidos-encontrados` | Abas de perdidos/encontrados com listagem, filtros e formulários para reportar |
