# Componentes — Sistema de Bate-Ponto

Biblioteca de componentes reutilizáveis em React (JavaScript + JSX + CSS puro), construída para alimentar as telas do sistema de bate-ponto. Nenhum componente aqui depende de API, rotas ou bibliotecas externas — são blocos de UI prontos para montar formulários e páginas.

## Como usar

Importe cada componente diretamente da sua pasta:

```jsx
import Botao from "./components/Botao/Botao";
import Input from "./components/Input/Input";
```

---

## Formulário e campos

### Botao
Botão reutilizável com 5 variantes visuais.

```jsx
<Botao texto="Cadastrar" tipo="submit" variante="primario" onClick={handleClick} />
```

| Prop | Tipo | Descrição |
|---|---|---|
| `texto` | string | Texto exibido no botão |
| `tipo` | string | `"button"` (padrão) ou `"submit"` |
| `variante` | string | `primario`, `secundario`, `perigo`, `sucesso`, `cancelar` |
| `onClick` | function | Callback de clique |
| `disabled` | boolean | Desabilita o botão |

---

### Label
Rótulo simples, associável a um campo via `htmlFor`.

```jsx
<Label texto="Nome" htmlFor="nome" required />
```

Usado internamente por `Input`, `Select`, `Textarea` e `CampoSenha` — normalmente você não precisa chamá-lo direto.

---

### Input
Campo de texto controlado, com label e mensagem de erro embutidos.

```jsx
<Input
  label="Nome"
  name="nome"
  value={nome}
  onChange={(e) => setNome(e.target.value)}
  erro={erros.nome}
/>
```

| Prop | Descrição |
|---|---|
| `label`, `type`, `placeholder`, `value`, `onChange`, `name`, `id` | Padrão de input controlado do React |
| `required`, `disabled` | Estados do campo |
| `erro` | Se preenchido, borda fica vermelha e a mensagem aparece abaixo do campo |

---

### CampoSenha
Igual ao `Input`, mas com botão de mostrar/ocultar senha (usa `useState` interno só para esse toggle).

```jsx
<CampoSenha label="Senha" name="senha" value={senha} onChange={handleChange} />
```

---

### Select
Select controlado, recebendo as opções como array de objetos `{ value, label }`.

```jsx
<Select
  label="Cargo"
  options={[{ value: 1, label: "Analista" }, { value: 2, label: "Gestor" }]}
  value={cargo}
  onChange={handleChange}
/>
```

---

### Textarea
Mesmo padrão do `Input`, mas para texto multilinha. Aceita `linhas` para definir a altura (`rows`).

```jsx
<Textarea label="Observação" name="obs" value={obs} onChange={handleChange} linhas={5} />
```

---

### Checkbox
Checkbox controlado com label clicável.

```jsx
<Checkbox label="Lembrar de mim" checked={lembrar} onChange={handleChange} />
```

---

### Radio
Botão de opção único. Para montar um grupo, renderize vários `Radio` com o mesmo `name` e `value` diferentes — quem controla qual está marcado é o estado do componente pai.

```jsx
<Radio label="Dinheiro" name="pagamento" value="dinheiro" checked={pagamento === "dinheiro"} onChange={handleChange} />
<Radio label="Cartão" name="pagamento" value="cartao" checked={pagamento === "cartao"} onChange={handleChange} />
```

---

### Formulario
Wrapper de `<form>` que já intercepta o `onSubmit` com `preventDefault()`.

```jsx
<Formulario onSubmit={handleSubmit}>
  <Input label="Nome" name="nome" value={nome} onChange={handleChange} />
  <Botao texto="Salvar" tipo="submit" />
</Formulario>
```

---

## Layout e estrutura

### Container
Centraliza o conteúdo com largura máxima e padding lateral responsivo.

```jsx
<Container>
  <h1>Painel</h1>
</Container>
```

### Card
Caixa genérica com borda, cantos arredondados e sombra leve — usada para agrupar qualquer conteúdo.

```jsx
<Card>
  <h2>Clientes</h2>
  <p>Total: 20</p>
</Card>
```

### Header
Faixa superior da aplicação. Não tem conteúdo fixo — você decide o que colocar dentro via `children` (logo, nome do usuário, botão de logout, etc.).

```jsx
<Header>
  <span>Sistema de Ponto</span>
  <Botao texto="Sair" variante="cancelar" />
</Header>
```

### Sidebar
Barra lateral de navegação. Aceita uma lista de `itens` (renderiza um `Menu` internamente) ou `children` livre, caso prefira montar o conteúdo manualmente. Não contém lógica de rotas — só estrutura visual.

```jsx
<Sidebar itens={[{ chave: "ponto", texto: "Bater ponto", href: "/ponto", ativo: true }]} />
```

### Menu
Lista de navegação reutilizada pela `Sidebar`, mas que também pode ser usada sozinha (ex.: menu de usuário). Cada item recebe `chave`, `texto`, `href`, `onClick` e `ativo` opcional.

```jsx
<Menu itens={[{ chave: "perfil", texto: "Meu perfil", href: "/perfil" }]} />
```

### Footer
Rodapé simples e fixo no fim da página.

```jsx
<Footer texto="© 2026 Sistema de Bate-Ponto" />
```

---

## Dados e listagem

### Tabela
Tabela genérica para qualquer listagem (clientes, colaboradores, registros de ponto, etc). Recebe `colunas` (com `chave`, `titulo` e, opcionalmente, uma função `renderizar(linha)` para customizar a célula) e `dados`.

```jsx
<Tabela
  colunas={[
    { chave: "nome", titulo: "Nome" },
    { chave: "data", titulo: "Data" },
    { chave: "acoes", titulo: "", renderizar: (linha) => <Botao texto="Editar" variante="secundario" /> },
  ]}
  dados={registros}
/>
```

### Paginacao
Navegação entre páginas de uma listagem, com números de página clicáveis e botões anterior/próxima.

```jsx
<Paginacao paginaAtual={pagina} totalPaginas={10} onMudarPagina={setPagina} />
```

### EmptyState
Exibido quando uma listagem não tem dados — evita deixar a tela vazia sem explicação.

```jsx
<EmptyState titulo="Nenhum registro encontrado" mensagem="Ainda não existem registros de ponto para este período." />
```

### Loading
Spinner simples (feito só com CSS) para indicar carregamento.

```jsx
<Loading texto="Carregando registros..." />
```

---

## Feedback e confirmação

### Mensagem
Caixa de aviso colorida conforme o `tipo`: `sucesso`, `erro`, `aviso` ou `info`.

```jsx
<Mensagem tipo="sucesso" texto="Ponto registrado com sucesso!" />
```

### Modal
Janela modal genérica, com overlay e botão de fechar. Só renderiza quando `aberto` é `true`.

```jsx
<Modal aberto={aberto} titulo="Cadastrar colaborador" onFechar={() => setAberto(false)}>
  <p>Conteúdo do modal aqui.</p>
</Modal>
```

### Confirmacao
Variação do `Modal` já pronta para confirmar ações destrutivas (ex.: excluir um registro), com botões de cancelar e confirmar.

```jsx
<Confirmacao
  aberto={aberto}
  titulo="Excluir registro?"
  mensagem="Esta ação não pode ser desfeita."
  onConfirmar={excluirRegistro}
  onCancelar={() => setAberto(false)}
/>
```

---

## Convenções seguidas

- Cada componente tem seu próprio `.jsx` e `.css` — nenhum CSS compartilhado entre pastas.
- Nenhuma dependência externa (sem Bootstrap, Material UI, Tailwind ou bibliotecas de componentes).
- Paleta neutra com azul (`#2563eb`) como cor de ação principal.
- Estados de `hover`, `focus` e `disabled` tratados em todos os campos e botões.
- Sem TypeScript, sem classes — apenas componentes funcionais com props, `children` e `useState` onde necessário (só em `CampoSenha`, para o toggle de mostrar/ocultar senha).
